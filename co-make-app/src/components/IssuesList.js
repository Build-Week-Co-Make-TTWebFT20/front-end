import React from 'react'
import IssueCard from './IssueCard'

function IssuesList({ issues }) {
    return (
        <div>
            {
                issues.map(issue => {
                    <IssueCard key={issue.description} issue={issue} />
                })
            }
        </div>
    )
}

export default IssuesList
