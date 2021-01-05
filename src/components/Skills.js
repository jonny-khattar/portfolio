import React, { Component } from 'react'
import { SkillItem } from './SkillItem';
import '../css/skills.css';

export class Skills extends Component {

    render() {

        const skills = this.props.skillsList;
        return (
            <div className="row skill-list">
                {skills.map(s => {
                    return <SkillItem skill={s} />
                })}
            </div>
        )
    }

}