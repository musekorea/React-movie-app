import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import Detail from './routes/Detail.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
