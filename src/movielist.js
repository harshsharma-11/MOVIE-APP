import {Component} from "react";
import MovieCard from './moviecard';
//curly bracket because it is a named import not as deafault


function MovieList(props){
      
        //movies we can get from this.state as it is ths.state object
        const {movies,addStar,cartCount,decStar,toggleCart,toggleFavourite}=props;
        return(
            <>
            <div style={styles.movies}>
             {movies.map((movie,index)=><MovieCard key={index} movie={movie}
               increaseStar={addStar}  
               decreaseStar={decStar} 
               toggleCart={toggleCart} 
               toggleFavourite={toggleFavourite} 
               cartCount={cartCount}
               />) } 
            </div>
            </>
        )
      }


export default MovieList;
const styles = {

  movies: {
 marginTop:"100px"

}}