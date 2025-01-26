import React, { createContext, useState, useContext } from 'react';
import Button from "./components/Button"
import "./App.css"

// 2. Створіть додаток, який дозволяє перемикати тему (світлу або темну) для всього інтерфейсу.
// - Створіть ThemeContext для зберігання теми та функції перемикання.
// - Використовуйте useContext у компонентах для зміни класів на основі вибраної теми.
// - Додайте кнопку для перемикання теми.

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>
      Toggle Theme
    </Button>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <p>Click button below to toggle the theme:</p>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
};

export default App;