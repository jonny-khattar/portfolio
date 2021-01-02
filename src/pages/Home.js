import React, { Component } from 'react';
import portrait from '../images/portrait.jpeg'
import data from '../data.json';
import { Experience } from '../components/Experience';

export class Home extends Component {
    render() {
        const {skills, experience} = data;
        return (
            <div>
                <div className=''>
                    <img className="portrait" src={portrait} alt="Portrait"></img>
                </div>
                <div>
                    <p>Hi my name is Jonathan Khattar i am a Software Developer based in Sydney Australia and welcome to my online resume portfolio</p>
                </div>
                <div>
                    <h3>Contact Info</h3>
                    <ul className="contact-info-list">
                        <li>Email: jonathan.khattar91@gmail.com</li>
                        <li>Mobile: (+61)423 591 923</li>
                    </ul>
                </div>
                <div>
                    <h1>
                        Skills
                    </h1>
                    <ul>
                        {skills.map(s => {
                            return <li>{s.name}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h1>Experience</h1>
                    {experience.map(e => {
                        return (
                            <Experience experience={e}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
