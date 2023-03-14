import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

const scrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    hello
    </div>
  )
}

export default App
