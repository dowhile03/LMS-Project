import React from 'react'
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';

const TeacherDashboard = () => {
    const {
        user: { name, email, role },
      } = isAuthenticated();
    return (
        <Base title="Teacher Dashboard" description="This is the Teacher's DashBoard">
        <h1>Welcome Teacher</h1>
        </Base>
    )
}

export default TeacherDashboard;
