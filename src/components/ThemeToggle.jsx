import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('cbs-dark-mode');
    if (stored === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark-theme', next);
    window.localStorage.setItem('cbs-dark-mode', String(next));
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default ThemeToggle;
