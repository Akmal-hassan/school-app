import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Academics from './pages/Academics.jsx';
import Admissions from './pages/Admissions.jsx';
import Results from './pages/Results.jsx';
import Faculty from './pages/Faculty.jsx';
import Gallery from './pages/Gallery.jsx';
import StudentLife from './pages/StudentLife.jsx';
import News from './pages/News.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } }
};

function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial="initial" animate="animate" exit="exit" variants={pageTransition}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/results" element={<Results />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
