import React, { Fragment } from 'react';
import Header from "../Components/Header/Header";
import Places from '../Components/Places/Places';
import Gallery from '../Components/Gallery/Gallery';


function Home(){
  return(
    <Fragment>
      <Header/>
      <Places/>
      <Gallery/>
    </Fragment>
  )
}

export default Home;