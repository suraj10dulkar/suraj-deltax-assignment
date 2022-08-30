import {Routes,Route, BrowserRouter} from "react-router-dom"
import './App.css';
import Home from './components/home ';
import AddSongs from "./components/addsongs";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/addsongs' element={<AddSongs></AddSongs>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
