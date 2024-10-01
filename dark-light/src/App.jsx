import { useContext, useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider, ThemeContext } from './Context/Theme'
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtns';

function App() {
  // Use useContext with ThemeContext to access values from the provider
  const [ themeMode, setThemeMode ] = useState("light");

  const lightTheme = ()=>{
    setThemeMode("light");
  }

  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* ThemeBtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
