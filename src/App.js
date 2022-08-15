import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './views/Home';
import Details from './views/Details';
import Categories from './views/Categories';
import NotFound from './views/NotFound';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/categories/:category' element={<Categories />} />
        <Route exact path='/details/:id' element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
