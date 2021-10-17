import React from 'react';
import './Home.scss';
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';
import Rightbar from '../Rightbar/Rightbar';
import Sidebar from '../Sidebar/Sidebar';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    );
};

export default Home;