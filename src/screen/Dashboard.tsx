import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight'
import { useNavigate } from "react-router-dom";
import DashboardHeader from '../components/header/DashboardHeader';

function Dashboard() {
    const [isPhone, setIsPhone] = useState(false);
    const [isValidInput, setIsValidInput] = useState(false)

    return (
        <>
            <div className="App">
                <DashboardHeader />
            </div>
        </>
    );
}

export default Dashboard;