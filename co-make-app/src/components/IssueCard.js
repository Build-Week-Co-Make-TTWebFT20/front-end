import React from 'react'

function IssueCard(props) {
    const { name, description, city, state, zip } = props.issue;
    return (
        <div>
            <h2>{name}</h2>
            <div>
                <h3>Description : </h3>
                <p>{description}</p>
            </div>
            <div>
                <h4>
                    City : {city}
                    State : {state}
                    Zip : {zip}
                </h4>
            </div>
        </div>
    )
}

export default IssueCard