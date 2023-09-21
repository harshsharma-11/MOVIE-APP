import React from "react"
import './index.css'
import styled from "styled-components";

const Nav=styled.div`

// dynamic styling of background colour by using props

    background-color: ${(props)=>props.show?"rgb(67, 154, 236)":"orange"};
    height:90px;
    width: 100%;
    
    margin-bottom: 2vh;
    display: flex;
    justify-content: space-between;
position:fixed;
    top:0vh;
   
/**************hovering can also be done here****************/
    //&:hover{
    //    background-color:pink;
    //}

`;
class Navbar extends React.Component {
    
    render() {
        const {cartCount}=this.props;
        const {wishlist}=this.props;
        

        return (
            <>
{/* Nav because of styled componenets as in styling we name this div to be Nav and show property is for dynamic styling
and show because to learn dynamic styling if show become false then diff color*/}
                <Nav show={true}>
                    <div style={styles.logo}><img style={styles.logoImage} alt="movie shop" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTGo7XSDvfQ9rBT9b3FHbiHOSk5Ys3OTiEUAdyTZNdI9RdXHARcisn_ifZWW9A9-pSLI&usqp=CAU"></img></div>
                    <div style={styles.title}>Movie Shop</div>
                    <div style={styles.cartLook}>
                        <img style={styles.cartLogo} alt="cart" src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"></img>
                        <span style={styles.cartCount}  >{cartCount}</span>
                    </div>
                    <div style={styles.cartLook}>
                        <img style={styles.cartLogo} alt="wishlist" src="https://cdn-icons-png.flaticon.com/128/10887/10887999.png"></img>
                        <span style={styles.heartCount}  >{wishlist}</span>
                    </div>
                    
                    
                </Nav>
            </>
        )
    }
}

export default Navbar;
const styles = {

   logoImage:{
    marginLeft:"1vh",
width:"120px",
height:"90px"
   } ,

    title: {
   width: "85%",
   height: "98%",
   fontSize: "35px",
   color: "aliceblue",
   fontWeight: "900",
   fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
   marginLeft: "15px",
   marginTop: "15px",
   textTransform: "uppercase",
   

},
cartLook:{
    width: "8%",
    height: "95%",
    marginTop: "0.3vh",
    cursor: "pointer",
    position: "relative",

},

cartLogo:{
    height: "50px",
    width: "50px",

},
cartCount:{
    backgroundColor: "blueviolet",
    width: "25px",
    height: "25px",
    textAlign: "center",
    position: "absolute",
    left: "35px",
    color: "azure",
    borderRadius: "50%",
    font: "800",
    fontSize: "22px",
},
heartCount:{
    backgroundColor: "rgb(43 226 85)",
    width: "25px",
    height: "25px",
    textAlign: "center",
    position: "absolute",
    left: "30px",
    bottom:"30px",
    color: "azure",
    borderRadius: "50%",
    font: "800",
    fontSize: "22px",
}
}