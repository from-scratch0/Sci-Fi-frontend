import React, { Component } from 'react';
import ScifiTimeline from '../components/scifiTimeline';

const Home = () => {
    return ( 
        <React.Fragment>
            <div className="scifi-banner">
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

            </div>
        </React.Fragment>
     );
}
 
export default Home;