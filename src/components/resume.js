import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from './img/pic2.jpg';


class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={pic}
                                alt="My pic"
                                style={{height: '200px'}}
                                />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Madjid Harun</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book. It has survived not only five centuries</p>
                          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                          <h5>Address</h5>
                          <p>1 Programmer</p>
                          <h5>Phone</h5>
                          <p>(250) 787687512</p>
                          <h5>Email</h5>
                          <p>someone@example.com</p>
                          <h5>Web</h5>
                          <p>mywebsite.com</p>
                          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;