
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * Lightweight cart stored in localStorage as:
 * [{ id, title, price, image, qty }]
 */

const CART_KEY = 'shoppy_cart_v1';

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // ignore
  }
}

export default function Cart() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const newProductId = params.get('product'); // If present, add this to the cart

  const [cart, setCart] = useState(() => loadCart());
  const [adding, setAdding] = useState(false);

  // Add item from query param (if any), then clear the query so refreshes don't re-add
  useEffect(() => {
    if (!newProductId) return;

    setAdding(true);
    axios
      .get(`https://fakestoreapi.com/products/${newProductId}`)
      .then((res) => {
        const p = res?.data;
        if (!p) return;

        setCart((prev) => {
          // If already exists, increment; else add with qty=1
          const idx = prev.findIndex((x) => String(x.id) === String(p.id));
          let next;
          if (idx >= 0) {
            next = prev.map((x, i) =>
              i === idx ? { ...x, qty: x.qty + 1 } : x
            );
          } else {
            next = [
              ...prev,
              { id: p.id, title: p.title, price: p.price, image: p.image, qty: 1 },
            ];
          }
          saveCart(next);
          return next;
        });
      })
      .catch(() => {
        // ignore errors in demo
      })
      .finally(() => {
        setAdding(false);
        // Remove the query param to avoid re-adding on refresh/back
        const url = new URL(window.location.href);
        url.searchParams.delete('product');
        navigate(url.pathname + url.search, { replace: true });
      });
  }, [newProductId, navigate]);

  // Cart operations
  const inc = (id) => {
    setCart((prev) => {
      const next = prev.map((x) =>
        x.id === id ? { ...x, qty: x.qty + 1 } : x
      );
      saveCart(next);
      return next;
    });
  };

  const dec = (id) => {
    setCart((prev) => {
      const next = prev
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0);
    saveCart(next);
      return next;
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const next = prev.filter((x) => x.id !== id);
      saveCart(next);
      return next;
    });
  };

  const clearCart = () => {
    saveCart([]);
    setCart([]);
  };

  // Totals (display: INR-like look to match earlier)
  const totalINR = useMemo(() => {
    const sumUSD = cart.reduce((acc, it) => acc + it.price * it.qty, 0);
    // Same demo conversion you used on product page; adjust as needed
    return `₹${Math.round(sumUSD * 83).toLocaleString('en-IN')}`;
  }, [cart]);

  return (
    <section className="generic-page">
      <h2>Cart Page</h2>

      {adding && <div className="hint">Adding item…</div>}

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <p>
            <Link to="/category/electronics">Browse Electronics</Link> or{' '}
            <Link to="/category/clothing">Browse Clothing</Link>
          </p>
        </div>
      ) : (
        <div className="cart-box">
          {cart.map((it) => (
            <div key={it.id} className="cart-row">
              <div className="cart-img">
                <img src={it.image} alt={it.title} />
              </div>

              <div className="cart-info">
                <div className="cart-title">{it.title}</div>

                <div className="cart-meta">
                  <div className="cart-price">
                    Price:{' '}
                    <strong>
                      ₹{Math.round(it.price * 83).toLocaleString('en-IN')}
                    </strong>
                  </div>
                  <div className="cart-qty">
                    Quantity:{' '}
                    <button className="qty-btn" onClick={() => dec(it.id)}>-</button>
                    <span className="qty-value">{it.qty}</span>
                    <button className="qty-btn" onClick={() => inc(it.id)}>+</button>
                  </div>
                </div>

                <div className="cart-actions">
                  <button className="remove-btn" onClick={() => removeItem(it.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-footer">
            <Link to="/category/electronics" className="purchase-more">Purchase More</Link>
            <div className="total-price">Total Price: <strong>{totalINR}</strong></div>
          </div>

          <div className="cart-controls">
            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </section>
  );
}
