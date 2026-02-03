
import { Link } from 'react-router-dom';

const desc = `
Shoppy is your friendly neighborhood marketplace built to make browsing
simple and delightful. Whether you are exploring the latest gadgets or
refreshing your wardrobe, Shoppy puts everything neatly in one place.
We believe shopping should be fast, informative, and enjoyable, so you
will find clean navigation, clear categories, and focused product
details. Our experience is mobile-first and performance-minded, which
means quick loads and smooth transitions as you jump from one category
to another. With a curated set of products and an interface that stays
out of your way, Shoppy helps you get from discovery to decision with
confidence. Browse electronics to find practical devices that solve real
problems or head to clothing for everyday essentials and standout looks.
We’re constantly improving based on feedback to keep your visit friendly,
reliable, and fun. Welcome to Shoppy—where choice meets clarity and
quality browsing meets zero clutter.
`;

export default function Home() {
  return (
    <section className="home-layout">
      <div className="panel bordered">
        <div className="section-title">Description about Shoppy</div>
        <p className="paragraph">{desc}</p>
      </div>

      <div className="panel bordered">
        <div className="section-title">Categories:</div>
        <ul className="category-list">
          <li><Link to="/category/electronics">Electronics</Link></li>
          <li><Link to="/category/clothing">Clothing</Link></li>
        </ul>
      </div>

      <div className="file-label">Home.js</div>
    </section>
  );
}
