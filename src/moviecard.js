import {Component} from "react";
//or you can import React from "react" so in that case instead of extends Componenet we write React.Component
import './index.css'
//as there is no use of state so we can make it function componeent rather than class
function MovieCard(props){
    
      // this specifies that these properties are get from props of this and object name is movies 
//const {name,price,about,starCount,cart,fav,image,rating}=this.state;

//no use of render as no state is there

//so to directly using them whereevr required
const {movie,increaseStar,decreaseStar,toggleCart,toggleFavourite}=props;
const {name,price,about,starCount,cart,fav,image,rating}=movie;

        return(
    <>
    <div className="movie-card">
      <div className="movie-image"><img alt="hello" src={image}></img></div>

      <div className="description">
        <div className="movie-name">
          {name}
          </div>
          <div className="movie-about">
          {about}
      </div>
      <div className="price dark">Rs.{price}</div>
      <div className="footer">
        <div className="movie-ratings dark">{rating} stars</div>
        <div className="movie-stars">

          {/* as this.addstar is refernce of this so we have to bind it properly with 
          addstar so that it will properly recognise this 
          ..We can rather use arrow function if we don't need to bind as arrow function automatically bind 
          so addstar=()=>{
          }*/}
{/* 
          //taking inline function because we cannot call function insideonclick we just give
          // callback so as this function need argument so we call it by inline function */}
          <div className="plus-minus" onClick={()=>{decreaseStar(movie)}}><img alt="1" src="https://cdn-icons-png.flaticon.com/128/9055/9055213.png"></img></div>
          <div className="star" >
            <img alt="hello" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"></img>
          </div >
          <div className="plus-minus" onClick={()=>{increaseStar(movie)}}><img alt="1"  src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"></img></div>
          <span> &nbsp; {starCount}</span>
          </div>
          <div className="buttons">
            {/*********************** //favourites the movie **************************/}
            {fav?<button className='unfavourite-btn spe-btn' onClick={()=>{toggleFavourite(movie)}}>Un-favourites</button>:<button className='favourite-btn spe-btn' onClick={()=>{toggleFavourite(movie)}}>Add To favourites</button>}
        
        {/*********************** //cart the movie **************************/}
        <button className={cart?"uncart-btn spe-btn":"cart-btn spe-btn"} onClick={()=>{toggleCart(movie)}}>{cart?"Remove from cart":"Add to Cart"} </button>
        </div>
      </div>
        
      </div>
  

    </div>
    </>
        )
    }
  
  export default MovieCard;