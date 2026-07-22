import { motion } from 'framer-motion';

const galleryItems = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: `Campus moment ${index + 1}`
}));

function Gallery() {
  return (
    <section className="section page-section gallery-page">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Gallery</p>
          <h1>Visual highlights from campus life and school events.</h1>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <motion.div key={item.id} className="gallery-card" whileHover={{ scale: 1.02 }}>
              <div className="gallery-image" />
              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
