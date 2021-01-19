import React from'react';
import PropTypes from "prop-types";

const Profile=props=> {
    
    const handClick=(e)=> {
        e.preventDefault();
        alert('Hey my name is '+props.fullName+ ' !')
    }

    const styleObjecttitle = {color:"red", fontFamily:"Lobster" , textShadow:"2px 2px gray", fontWeight:"500"}
    const styleObjecttitle2 = {color:"black", fontFamily:"Lobster", textShadow:"2px 2px gray", fontSize:"25px",fontWeight:"500"}
    const styleObjecttitle3 = {color:"blue", fontFamily:"Lobster", textShadow:"2px 2px gray", fontWeight:"500"}
    const styleObjecttitle4 = { fontWeight:"700" }

    return (
        <div>
                 {props.children}
        <h1 style ={styleObjecttitle}>My Full Name is : {props.fullName} </h1>
        <p style ={styleObjecttitle2}> {props.bio}</p>
        <h2 style ={styleObjecttitle3}> {props.profession}</h2>  
        <a href="/" onClick={handClick} style ={styleObjecttitle4}> Click me to alert</a>
        </div>
    )
}

Profile.defaultProps = {
    fullName:"Marwen Tayari",
    bio:"I am from Tunisia ,I live in Hammam Sousse and I like football and going to gym",
    profession:" I am a Mechatronics Engineer very interested in web development" 
}

Profile.propTypes = {
fullName : PropTypes.string,
bio : PropTypes.string,
profession : PropTypes.string
};

export default Profile