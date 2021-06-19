import React from 'react'
import { Card } from 'primereact/card';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section"></div>
                    <Card title="Login">

                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)