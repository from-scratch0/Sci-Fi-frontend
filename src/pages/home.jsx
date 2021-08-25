import React, { Component } from 'react';
import ScifiTimeline from '../components/scifiTimeline';
import "./home.css";
import { useEffect } from 'react';
import { initWorld } from "../utils/space"

const Home = () => {
    useEffect(()=>{ initWorld() },[])
    return ( 
        <React.Fragment>
            {/* <div className="scifi-banner">
                <header className="scifi-header">
                <section>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </section>
                </header>
                <ScifiTimeline />
            </div> */}
            <div className="home-page">
                <div id="universe" />
            </div>
        </React.Fragment>
     );
    }
    
export default Home;