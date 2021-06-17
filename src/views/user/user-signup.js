import React from 'react'
import { Card } from 'primereact/card';
import FormGroup from '../../components/form-group';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { withRouter } from 'react-router-dom';

class UserSignup extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    signup = () => {
        const { email, name, password, confirmPassword } = this.state

        console.log(this.state)
    }

    cancel = () => {
        this.props.history.push('/login')
    }

    render() {

        const footer = (
            <span>
                <Button onClick={this.signup} className="p-button" icon="pi pi-check" label="Salvar" />
                <Button className="p-button-secondary" icon="pi pi-times" label="Cancelar" />
            </span>
        );
        return (

            <Card title="Cadastro de usuário" className="card mb-3" footer={footer}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome" htmlFor="inputName">
                                <InputText id="inputName" 
                                           name="name" 
                                           onChange={e => this.setState({ name: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Email" htmlFor="inputEmail">
                                <InputText id="inputEmail" 
                                           name="email" 
                                           onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Senha" htmlFor="inputPassword">
                                <InputText type="password" 
                                           id="inputPassword" 
                                           name="password" 
                                           onChange={e => this.setState({ password: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Confirmar senha" htmlFor="inputConfirmPassword">
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