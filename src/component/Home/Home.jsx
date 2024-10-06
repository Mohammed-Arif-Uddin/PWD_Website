import React from 'react';

const Home = () => {
    const divStyle = {
        backgroundImage: "url('https://www.wikiimpact.com/wp-content/uploads/2021/04/vh-1024x536.jpeg')", // Replace with your image URL
        backgroundSize: 'cover', // Ensures the image covers the whole page
        backgroundPosition: 'center', // Centers the image
        height: '100vh', // Takes full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Adjust text color to contrast with background
    };
    return (
        <div style={divStyle}>
            <h1>Welcome to our PWD project</h1>
        </div>
    );
};

export default Home;