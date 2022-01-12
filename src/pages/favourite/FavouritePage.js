import React from "react"

import FavouriteContent from "../../components/Favourite/FavouriteContent"

import { Container } from "./FavouritePage.styles"

const FavouritePage = () => {

  const handleClick = () => localStorage.clear();

 return (
   <Container>
     FavouritePage

     {/* <button onClick={handleClick}>Remove All</button> */}

     <FavouriteContent />
   </Container>
 )
}

export default FavouritePage