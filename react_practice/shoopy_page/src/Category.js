
import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 15000,
});

export default function Category() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading | error

  const title = useMemo(() => {
    const label = categoryName
      ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
      : '';
    return `Welcome to ${label} Page`;
  }, [categoryName]);

  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');

    let request;

    if (categoryName === 'electronics') {
      request = api
        .get('/products/category/electronics', { signal: controller.signal })
        .then((res) => {
          setProducts(res.data || []);
          setStatus('idle');
        })
        .catch((err) => {
          const isCanceled =
            err?.name === 'CanceledError' ||
            err?.code === 'ERR_CANCELED' ||
            axios.isCancel?.(err);
          if (!isCanceled) setStatus('error');
        });
    } else if (categoryName === 'clothing') {
      request = Promise.all([
        api.get("/products/category/men's clothing", { signal: controller.signal }),
        api.get("/products/category/women's clothing", { signal: controller.signal }),
      ])
        .then(([menRes, womenRes]) => {
          const men = menRes?.data || [];
          const women = womenRes?.data || [];
          setProducts([...men, ...women]);
          setStatus('idle');
        })
        .catch((err) => {
          const isCanceled =
            err?.name === 'CanceledError' ||
            err?.code === 'ERR_CANCELED' ||
            axios.isCancel?.(err);
          if (!isCanceled) setStatus('error');
        });
    } else {
      setProducts([]);
      setStatus('idle');
    }

    return () => {
      controller.abort();
    };
  }, [categoryName]);

  return (
    <section className="category-layout">
      <div className="category-header">{title}</div>

      {status === 'loading' && <div className="hint">Loading products…</div>}
      {status === 'error' && <div className="hint error">Failed to load products.</div>}

      <div className="product-grid">
        {products.map((p) => (
          <article key={p.id} className="product-card">
            <div className="product-thumb">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="product-title">
              <Link to={`/product/${p.id}`}>{p.title}</Link>
            </div>
          </article>
        ))}
      </div>

      <div className="file-label">Category.js</div>
    </section>
  );
}
