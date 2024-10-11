import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route,Link } from "react-router-dom"
import Header from './component/Global/Header/Header';
import Home from './component/Page/Home/Home';
import Movie from './component/Page/Movie/Movie';
import Detail from './component/Page/DetailMovie/Detail';


function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/search/:slug" element={<Movie />}></Route>
        <Route path="/detail-movie/:slug" element={<Detail />}></Route>

      </Routes>
    </>
  );
}

export default App;
