import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from './img/pic2.jpg';


class Landing extends Component {
    render(){
        return(
            <div className="land" style={{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src={pic} alt="Logo" 
                        className="avatar-img"
                        />;

                        <div className= "banner-text">
                            <h1>Frontend Developer</h1>

                            <hr/>
                            <p>HTML/CSS | Javascript | React | Java | Quickbooks | Mobile App using Java | Photoshop</p>

                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                

                            </div>
                        </div>
                                                
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;