import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import CalculatorPage from './components/CalculatorPage';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
