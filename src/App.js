
import React from 'react';
import MovieList from './movielist';
import Navbar from './navbar';
import {movies} from './moviedata'
class App extends React.Component {
//as we wnat to render navbar from app so calling navbar from here
//ans movielist also from here
  constructor(){

    // When you create a subclass, it's important to ensure that the constructor of the parent class is also executed
    //to properly initialize the component.As we using extends means child class is extends the  parent
    //so to properly initialise the parent and after then its property can be inherited properly
  super();
    
    this.state={
     movies:movies,
     cartCount:0,
     wishlist:0,
     
    }
  }

  toggleFavourite=(movie)=>{
    const {movies}=this.state;
    const movieIndex=movies.indexOf(movie);
    if(movies[movieIndex].fav)
{
  this.state.wishlist-=1;
  movies[movieIndex].fav=false;
}
else{
  this.state.wishlist+=1;
  movies[movieIndex].fav=true;
}
    this.setState({
      movies:movies,
    })
  }
  

toggleCart=(movie)=>{
const {movies}=this.state;
const movieIndex=movies.indexOf(movie);
//if else can be used in js but not in jsx
if(movies[movieIndex].cart)
{
  this.state.cartCount-=1;
  movies[movieIndex].cart=false;
}
else{
  this.state.cartCount+=1;
  movies[movieIndex].cart=true;
}
// movies[movieIndex].cart?this.state.cartCount-=1:this.state.cartCount+=1;
// movies[movieIndex].cart=!movies[movieIndex].cart;
this.setState({
movies:movies,
cartCount:this.state.cartCount,
})
}

//to implicit bind ,so that no need to bind manually
  addStar=(movie)=>{

    //here we define that movies var is prop from this.state
    const {movies}=this.state;
    const movieIndex=movies.indexOf(movie);
    if(movies[movieIndex].starCount<5){
    
    movies[movieIndex].starCount+=0.5;
    }
    //to rerender
    this.setState({
      movies:movies,
    })
  }

  
  decStar=(movie)=>{

    //here we define that movies var is prop from this.state
    const {movies}=this.state;
    const movieIndex=movies.indexOf(movie);
    if(movies[movieIndex].starCount>0){
    movies[movieIndex].starCount-=0.5;
    }
    //to rerender
    this.setState({
      movies:movies,
    })
  }
render(){
  return (
    <>
    
    <Navbar cartCount={this.state.cartCount} wishlist={this.state.wishlist}  />
    <MovieList movies={movies}
               addStar={this.addStar}  
               decStar={this.decStar} 
               toggleCart={this.toggleCart} 
               toggleFavourite={this.toggleFavourite} 
               cartCount={this.state.cartCount}
              />

    </>
  );
}
}

export default App;
