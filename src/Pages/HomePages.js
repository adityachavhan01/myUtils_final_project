import React from 'react'
import bgImage from '../images/bg-image.jpg'; // Adjust the path as needed

const HomePages = () => {

  return (
    <div  className="min-w-screen mx-auto p-5 shadow-lg h-full min-h-screen overflow-auto bg-cover bg-center"
    style={{backgroundImage: `url(${bgImage})`} }
    >
     home page
    </div>
  )
}

export default HomePages
