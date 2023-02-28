import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<div>Home Page</div>} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<div>Quote page</div>} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
