import React from 'react'
import { Card } from 'primereact/card';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    render() {
        return (

            <Card style={{ width: '25rem' }} className="card" title="Login">

            </Card>
        )
    }
}

export default withRouter(Login)