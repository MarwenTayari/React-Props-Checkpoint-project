import './App.css';
import React from 'react';
import Profile from './profile/Profile';
import myPhoto from './myPhoto.jpg'

const styleObject ={ textAlign:"center" ,margin:"2% 20%",padding:"2%", backgroundImage:"url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-pd-sasi-03.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=cec9b4798fd70605e2a95fa61259c5db')",
                      borderRadius:"50px", boxShadow:"10px 10px 10px gray"}
const styleObjectImg = {borderRadius: "20px", border: "1px solid black", boxShadow:"10px 10px 10px gray"}

function App() {
  return (
    <div style={styleObject}>
      <Profile>
        <img src={myPhoto} alt='myPhoto' style ={styleObjectImg}/>
      </Profile>  
    </div>
  );
}

export default App;