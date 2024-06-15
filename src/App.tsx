import Main from 'page';
import './App.css';
import { ThemeContextProvider } from 'context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  )
}

export default App
