import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import pic from './img/pic2.jpg';


class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Madjid Harun</h2>
                        <img
                            src={pic}
                             alt="Me" style={{height: '250px', opacity: '0.9'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Madjid Harun, born in Bujumbura/Burundi, grew up, 
                        and study there my primary and secondary studies, one year in Uganda and three years in Rwanda doing my Bachelor degree
                        in Business and Information technology.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Arial', color: 'blue', fontWeight: 'bold' }}>
                                        <i className="fa fa-phone-square fa-3x" aria-hidden="true"/>
                                        (+250) 787687612
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Arial',color: 'green', fontWeight: 'bold' }}>
                                        <i className="fa fa-whatsapp fa-3x" aria-hidden="true" />
                                        (+250) 784166042
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', color: 'red', fontFamily: 'Arial', fontWeight: 'bold' }}>
                                        <i className="fa fa-envelope fa-2x" aria-hidden="true"/>
                                        harunamadjid226
                                    </ListItemContent>
                                </ListItem>

                                
                                
                            </List>
                        </div>

                        
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;