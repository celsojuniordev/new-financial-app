import React from 'react'
import { Card } from 'primereact/card';
import FormGroup from '../../components/form-group';
import { InputText } from 'primereact/inputtext';

class UserSignup extends React.Component {

    render() {
        return (

            <Card title="Cadastro de usuário" className="card mb-3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome" htmlFor="inputName">
                                <InputText id="inputName"/>
                            </FormGroup>
                            <FormGroup label="Email" htmlFor="inputEmail">
                                <InputText id="inputEmail"/>
                            </FormGroup>
                            <FormGroup label="Senha" htmlFor="inputPassword">
                                <InputText id="inputPassword"/>
                            </FormGroup>
                            <FormGroup label="Confirmar senha" htmlFor="inputConfirmPassword">
                                <InputText id="inputConfirmPassword"/>
                            </FormGroup>

                            <button className="btn btn-success"><i className="pi pi-save"></i> Salvar</button>
                            <button className="btn btn-danger"><i className="pi pi-times"></i> Cancelar</button>
                        </div>
                    </div>
                </div>

            </Card>

        )
    }
}

export default UserSignup