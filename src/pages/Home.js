import React, { Component } from 'react';
import Portrait from '../images/portrait.jpeg'
import Data from '../data.json';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';

export class Home extends Component {
    render() {
        const {skills, experience} = Data;
        return (
            <div>
                <h1 className="app-title">Jonathan Khattar</h1>
                <div>
                    <img className="portrait" src={Portrait} alt="Portrait"></img>
                </div>
                <Skills skillsList={skills}/>
                <hr></hr>
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
