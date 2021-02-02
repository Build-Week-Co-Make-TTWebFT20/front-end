import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import AddIssue from './AddIssue';
import IssuesList from './IssuesList';

function Dashboard() {
    const [issuesList, setIssuesList] = useState([]);
    return (
        <div>
            <AddIssue />
            <IssuesList issues={issuesList} />
        </div>
    )
}

export default Dashboard
