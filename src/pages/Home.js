import React, { Component } from 'react';
import Portrait from '../images/portrait.jpeg'
import Data from '../data.json';
import { Experience } from '../components/Experience';
import { TitledList } from '../components/TitledList';

export class Home extends Component {
    render() {
        const {skills, experience} = Data;
        const frontEnd = skills.filter(s => s.type === "FrontEnd");
        const backEnd = skills.filter(s => s.type === "BackEnd");
        const other = skills.filter(s => s.type === "Other");

        return (
            <div>
                <div>
                    <img className="portrait" src={Portrait} alt="Portrait"></img>
                </div>
                    <div className="row">
                        <div className="col-md-4">
                            <TitledList title="Front-End" property="name" list={frontEnd}/>
                        </div>
                        <div className="col-md-4">
                            <TitledList title="Back-End" property="name" list={backEnd}/>
                        </div>
                        <div className="col-md-4">
                            <TitledList title="Other" property="name" list={other}/>
                        </div>
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
