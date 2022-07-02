import React, { Fragment } from 'react';
//import Header from '../Components/Header/Header';
import SecHeader from '../Components/SecondHeader/SecondHeader';
import List from '../Components/ListHotels/List';
function ListHotels(){
    return(
        <Fragment>
            <SecHeader/>
            <List/>
        </Fragment>
        
    )

}
export default ListHotels;