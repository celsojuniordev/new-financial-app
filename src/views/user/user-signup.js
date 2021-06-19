import React from 'react'
import { Card } from 'primereact/card';
import FormGroup from '../../components/form-group';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { withRouter } from 'react-router-dom';
import { message } from '../../components/toast'
import UserService from '../../service/user/user-service';

class UserSignup extends React.Component {

    constructor() {
        super()
        this.service = new UserService()
    }

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    signup = () => {
        const { email, name, password, confirmPassword } = this.state
        const user = { email, name, password, confirmPassword }

        if (password !== confirmPassword) {
            message('Confirmação de senha não confere')
            return false
        }

        this.service.signup(user)
            .then(response => {
                message('Usuário cadastrado com sucesso!')
                this.props.history.push('/login')
            })
            .catch(error => {
                console.log(error)
                if (error.response.data.code === 422) {
                    message(error.response.data.msg)
                } else {
                    error.response.data.erros.forEach(msg => {
                        message(msg)
                    })
                }
            })
    }

    cancel = () => {
        this.props.history.push('/login')
    }

    render() {

        const footer = (
            <span>
                <Button onClick={this.signup} className="p-button" icon="pi pi-check" label="Salvar" />
                <Button onClick={this.cancel} className="p-button-secondary" icon="pi pi-times" label="Cancelar" />
            </span>
        );
        return (

            <Card title="Cadastro de usuário" style={{ width: '25rem', textAlign: 'center' }} className="card" footer={footer}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome*" htmlFor="inputName">
                                <InputText id="inputName"
                                    name="name"
                                    onChange={e => this.setState({ name: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Email*" htmlFor="inputEmail">
                                <InputText id="inputEmail"
                                    name="email"
                                    onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Senha*" htmlFor="inputPassword">
                                <InputText type="password"
                                    id="inputPassword"
                                    name="password"
                                    onChange={e => this.setState({ password: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Confirmar senha*" htmlFor="inputConfirmPassword">
                                <InputText type="password"
                                    id="inputConfirmPassword"
                                    name="confirmPassword"
                                    onChange={e => this.setState({ confirmPassword: e.target.value })} />
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(UserSignup)