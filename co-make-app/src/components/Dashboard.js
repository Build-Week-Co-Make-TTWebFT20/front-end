import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import AddIssue from './AddIssue';

function Dashboard() {

    return (
        <div>
            <AddIssue />
        </div>
    )
}

export default Dashboard
