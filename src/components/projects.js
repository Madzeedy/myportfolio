import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell,Card ,CardTitle, CardActions, Button ,CardText , CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0 };
    }

    togglerCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">

                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black',textAlign: 'center' ,opacity: '0.8', width: '286px', height: '226px', background: 'url(https://media.npr.org/assets/img/2018/11/18/gettyimages-865109088-170667a_wide-f4e3c4a58ad5e1268dec3654c0b2d490e320bba6-s800-c85.jpg) center / cover'}}>#1</CardTitle>
                    <CardText style={{color: 'black', fontWeight: 'bold', fontSize: '22px'}}>Android_Notes-App</CardText>
                    <CardActions border>
                        
                        <Button colored style={{margin: 'auto'}}>Github</Button>
                        
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
                    <CardTitle style={{color: 'black',opacity: '0.8', height: '226px', background: 'url(https://png.pngtree.com/svg/20161122/0aaad2378b.svg) center / cover'}}>#2</CardTitle>
                        <CardText style={{color: 'black', fontWeight: 'bold', fontSize: '22px'}}>Lecturer's Evaluation-App</CardText>
                            <CardActions border>
                                
                                <Button colored>CodePen</Button>
                                
                            </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                </Card>
                

                </div> 
                
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">

                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black',textAlign: 'center' ,opacity: '0.8', width: '286px', height: '226px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclJW2I1p4Vk9JCuU2NTdJ0jDT5OSOAtp1JR3XgunzltTMHvzQ) center / cover'}}>#1</CardTitle>
                    <CardText style={{color: 'black', fontWeight: 'bold', fontSize: '22px'}}>School_Mgt System</CardText>
                    <CardActions border>
                        
                        <Button colored style={{margin: 'auto'}}>Github</Button>
                        
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
                    <CardTitle style={{color: 'black',opacity: '0.8', height: '226px', background: 'url(https://images.slideplayer.com/32/9910083/slides/slide_1.jpg) center / cover'}}>#2</CardTitle>
                        <CardText style={{color: 'black', fontWeight: 'bold', fontSize: '22px'}}>Super_Market Mgt System</CardText>
                            <CardActions border>
                                
                                <Button colored>CodePen</Button>
                                
                            </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                </Card>
                

                </div> 



            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div ><h1 style={{fontWeight: 'bold', fontSize: '32px',color: 'white' }}><marquee>In Process WebSite</marquee></h1></div>
            )
        }
        

    }


    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab style={{fontWeight: 'bolder', color: 'green'}}>Android</Tab>
                    <Tab style={{fontWeight: 'bolder', color: 'blue'}}>Java</Tab>
                    <Tab style={{fontWeight: 'bolder', color: '#30e8bf'}}>React</Tab>
                    
                </Tabs>

                
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.togglerCategories()}</div>
                        </Cell>
                    </Grid>
                
            </div>
        );
    }
}

export default Projects;