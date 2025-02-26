import{ createContext, useState, useContext, useEffect } from 'react';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  const [darkMode, setDarkMode] = useState(() => {
    
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });

  
  useEffect(() => {
    
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
   
    if (darkMode) {
      document.documentElement.classList.add('dark');
      console.log('Applied dark mode');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark mode');
    }
    
   
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', darkMode ? '#1f2937' : '#ffffff');
    }
  }, [darkMode]);

  
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => useContext(ThemeContext);