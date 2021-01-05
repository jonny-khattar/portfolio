import React, { Component } from 'react'

export class SkillItem extends Component {

    render() {
        const skill = this.props.skill;
        const image = skill.imageSource ? <img className="skill-logo" src={skill.imageSource} alt={skill.name + ' image'} /> : "";
        return (
            <div className='col-lg-4 skill-item'>
                <span>{image}{skill.name}</span>
            </div>
            
        )
    }
}