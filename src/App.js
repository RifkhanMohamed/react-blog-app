import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Home from "./pages/Home";
import NotFound from './pages/NotFound'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/articles' element={<ArticleList/>}/>
            <Route path='/articles/:articleId' element={<Article/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
