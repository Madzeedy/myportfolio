import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from './img/pic2.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class About extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4} className="resume-lef-col">
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
                        <p style={{color: 'black', fontSize: '16px'}}>From a personal standpoint, I find it enjoyable and rewarding to collaborate with coworkers
                         and get feedback on the work I’ve done.  A career in coding is different than work in many other fields.
                         Even if the code works as expected, there are often additional ways to make it even better. 
                         I feel proud that the asset I bring to the companies I work for is more than just using my time to do tasks.
                           Instead, I have real responsibility and am able to add real value, building useful features and bringing concepts into reality.
                           </p>
                          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                          <h5>Address</h5>
                          <p style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>Kigali/Rwanda</p>
                          <h5>Phone</h5>
                          <p style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>(250) 787687612</p>
                          <h5>Email</h5>
                          <p style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>harunamadjid226@gmail.com</p>
                          <h5>Web</h5>
                          <p>mywebsite.com</p>
                          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 style={{fontWeight: 'bold'}}>Education</h2>
                        <Education 
                            startYear={2016}
                            endYear={2017}
                            schoolName="Makerere University"
                            schoolDescription="One Year of English formation was really interesting at Makere University
                             which was mix with other few formations like road laws, Sico and Icdl certifications"

                        />


<Education 
                            startYear={2017}
                            endYear={2019}
                            schoolName="UTB"
                            schoolDescription="University of Tourism Technology and Business Studies.
                            UTB is committed to spearhead the advancement of education through quality teaching,
                             learning, research, consultancy and service to the community by preparing graduates 
                             to meet the needs of Rwanda, the sub-region and the global community.
                            UTB seeks to foster personal and professional growth in a conducive environment that 
                            values cultural diversity and cultivates the awareness of ethical issues,"

                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            jobName="Programmer"
                            jobDescription="However, when I was first transitioning into a developer role, it wasn’t positive all of the time.
                             There’s a slim line between feeling like Superman, and feeling stuck. 
                             Since I’m also involved in helping people transition into a career in coding.
                              I see both the best and the worst behaviors people have when going through this process. 
                              Based on this experience, I have 14 tips to help make the transition as smooth as possible."
                        />

                        <Experience 
                            startYear={2019}
                            jobName="Frontend Developer"
                            jobDescription="After a long time of studying doing assessments from lecturers in University,
                            I am now puting everything studied in work, getting exposed to outide life, getting the real face of the market."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>

                        <Skills 
                            skill="Javascript"
                            progress={60}
                        />

                        <Skills 
                            skill="React"
                            progress={40}
                        />

                        <Skills 
                            skill="HTML/CSS"
                            progress={80}
                        />

                        <Skills 
                            skill="Java"
                            progress={70}
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default About;