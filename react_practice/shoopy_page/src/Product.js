
import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 15000,
});

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('idle'); 

  const priceFormatted = useMemo(() => {
    if (!product?.price) return '';
    return `₹${(product.price * 83).toFixed(0)}`; 
  }, [product]);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      setStatus('loading');
      try {
        const { data } = await api.get(`/products/${id}`, { signal: controller.signal });
        setProduct(data);
        setStatus('idle');
      } catch (err) {
        const isCanceled = err?.name === 'CanceledError' || err?.code === 'ERR_CANCELED' || axios.isCancel?.(err);
        if (!isCanceled) setStatus('error');
      }
    }
    load();
    return () => { controller.abort(); };
  }, [id]);

  if (status === 'loading') return <div className="hint">Loading product…</div>;
  if (status === 'error') return <div className="hint error">Failed to load product.</div>;
  if (!product) return null;


  const ratingCount = product?.rating?.count ?? 0;

  return (
    <section className="product-page">
      
      <div className="product-left">
        <div className="red-box image-box">
          <img src={product.image} alt={product.title} />
          <div className="file-label">Product.js</div>
        </div>
      </div>

      
      <div className="product-right">
        <h1 className="red-box title-box">{product.title}</h1>

        <div className="blue-row">
          <span className="blue-pill">4.0 Rating</span>
          <span className="blue-pill">{ratingCount.toLocaleString()} ratings</span>
          <span className="blue-pill">Amazon's Choice</span>
          <span className="blue-pill">1k+ bought in past month</span>
        </div>

        <div className="deal-row">
          <span className="blue-pill">Limited time deal</span>
          <span className="red-price">{priceFormatted}</span>
          <button
            className="add-cart-btn"
            onClick={() => navigate(`/cart?product=${product.id}`)}
          >
            Add to Cart
          </button>
        </div>

        <div className="blue-pill small">Inclusive of all taxes</div>

        <div className="red-box meta-box">
          <div className="meta-title">Category</div>
          <div>{product.category}</div>
        </div>

        <div className="red-box meta-box">
          <div className="meta-title">Description</div>
          <div>{product.description}</div>
        </div>

        <div className="blue-icons">
          <span>Service option available</span>
          <span>1 Year Warranty Care</span>
          <span>10 days Replacement</span>
          <span>Free Delivery</span>
          <span>Delivered</span>
          <span>Tips</span>
        </div>
      </div>
    </section>
  );
}
