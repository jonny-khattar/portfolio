import React, { Component } from 'react'

export class Experience extends Component {

    render () {

        const experience = this.props.experience;

        return (
            <div>
                <span>{experience.employer} - {experience.title} -  {experience.start_date} - {experience.end_date} </span>
                <h5>Responsibilities</h5>
                <ul>
                    {experience.responsibilities.map(r => {
                        return (
                            <li>{r}</li>
                        )
                    })}
                </ul>
                <h5>Technologies</h5>
                <ul>
                    {experience.technologies.map(t => {
                        return (
                            <li>{t}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}