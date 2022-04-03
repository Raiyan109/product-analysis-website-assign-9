import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className="text-container">
                    <h1>Introducing the awesome brand watch </h1>
                    <p>Omega and Swatch have recently announced that they’re partnering to produce a new BIOCERAMIC moon watch. This partnership between a luxury manufacturer and a sports brand is designed to create a fusion of quality and function. </p>
                </div>
                <div className="img-container">
                    <img src="https://img.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg?t=st=1649006176~exp=1649006776~hmac=6a5b83f30cf8eaa5bcbcef154c6703d7f8d111e218e61e0e56ca65465410fd16&w=996" alt="" />
                </div>
            </div>

            <div className="customer-review">
                <h2>Customer Reviews (3)</h2>
                <button>See All Reviews </button>
            </div>

        </div>
    );
};

export default Home;