import React from 'react'
import { Card } from 'primereact/card';
import { withRouter } from 'react-router-dom';
import UserService from '../../service/user/user-service';
import FormGroup from '../../components/form-group';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import LocalStageService from '../../service/local-storage-service'
import { message } from '../../components/toast';

class Login extends React.Component {

    constructor() {
        super()
        this.service = new UserService()
    }

    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.service.login({
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            // this.context.startSession(response.data)
            LocalStageService.addItem('_user', response.data)
            this.props.history.push('/home')
        }).catch(error => {
            message(error.response.data)
        })
    }

    signup = () => {
        this.props.history.push('/user-signup')
    }

    render() {
        const footer = (
            <span>
                <Button onClick={this.login} className="p-button" icon="pi pi-sign-in" label="Entrar" />
                <Button onClick={this.signup} className="p-button-secondary" icon="pi pi-plus" label="Cadastrar" />
            </span>
        );

        return (

            <Card style={{ width: '25rem', textAlign: 'center' }} className="card" title="Login" footer={footer}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Email*" htmlFor="inputEmail">
                                <InputText id="inputEmail" autoFocus 
                                    name="inputEmail"
                                    onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Senha*" htmlFor="inputPassword">
                                <InputText id="inputPassword"
                                    name="password"
                                    type="password"
                                    onChange={e => this.setState({ password: e.target.value })} />
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(Login)