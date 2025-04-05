import React from 'react'
import './Home.css'



const Home = () => {
  return (
    <div className='home-main'>
        <div className='home-intro-container'>
        <div className='home-intro'> I'm Ben. I am software engineer from New York.</div>
        <img src="./face.jpg" className='me-img' />
        </div>
        <div className='stack'>
            <img src='./javascript.png'/>
            <img src='./python.png'/>
            <img src='./react.png'/>
            <img src='./node.png'/>
            <img src='./django.png'/>
            <img src='./html.png'/>
            <img src='./css.png'/> 
            <img src='./psql.png'/>
            <img src='./mongo.png'/>
        </div>
    </div>
  )
}

export default Home