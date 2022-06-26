import './App.css';
import {Header} from "./components/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SearchPage} from "./pages/searchPages/SearchPage";
import {BookPage} from "./pages/bookPage/bookPage";

function App() {
  return (
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SearchPage/>} />
              <Route path='/book' element={<BookPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
