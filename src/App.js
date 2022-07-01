import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Places from './Components/Places/Places';
import Gallery from './Components/Gallery/Gallery';
import Home from './Pages/Home';


function App() {
  return (
   <Fragment>
     <Home/>
   </Fragment>
  );
}

export default App;
