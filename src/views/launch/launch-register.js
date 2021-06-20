import React from 'react'
import { withRouter } from 'react-router'
// import LocalStorageService from '../../app/service/local-storage-service'
import { Card } from 'primereact/card';
import FormGroup from '../../components/form-group';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import LaunchService from '../../service/launch/launch-service';

class LaunchRegister extends React.Component {

    constructor() {
        super()
        this.service = new LaunchService()
    }

    state = {
        id: '',
        description: '',
        value: 0,
        month: 0,
        year: 0,
        type: '',
        status: '',
        updated: false
    }

    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        
        this.setState({ [name]: value })
    }

    teste = () => {
        console.log(this.state)
    }

    render() {
        const types = this.service.getTypes()
        const months = this.service.getMonths()

        const footer = (
            <span>
                <Button  className="p-button" icon="pi pi-check" label="Salvar" />
                <Button onClick={this.teste} className="p-button-secondary" icon="pi pi-times" label="Cancelar" />
            </span>
        );

        return (
            <Card title="Cadastrar lançamento" footer={footer}>
                <div className="p-grid">
                    <div className="p-col-12 p-lg-12">
                        <FormGroup htmlFor="inputDescription" label="Descrição*">
                            <InputText id="inputDescription"
                                name="description"
                                onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col-12 p-md-6">
                        <FormGroup htmlFor="inputYear" label="Ano*">
                            <InputNumber id="inputYear"
                                name="year"
                                onValueChange={this.handleChange}
                                value={this.state.year} />
                        </FormGroup>
                    </div>
                    <div className="p-col-12 p-md-6">
                        <FormGroup htmlFor="inputMonth" label="Mês*">
                            <Dropdown id="inputMonth"
                                name="month"
                                optionLabel="label"
                                options={months}
                                onChange={this.handleChange}
                                value={this.state.month} />
                        </FormGroup>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col-12 p-md-4">
                        <FormGroup htmlFor="inputValue" label="Valor*">
                            <InputNumber id="inputValue"
                                name="value"
                                onValueChange={this.handleChange}
                                value={this.state.value}
                                mode="currency" 
                                currency="BRL" 
                                locale="pt-BR" />
                        </FormGroup>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <FormGroup htmlFor="inputType" label="Tipo*">
                            <Dropdown id="inputType"
                                name="type"
                                optionLabel="label"
                                options={types}
                                onChange={this.handleChange}
                                value={this.state.type} />
                        </FormGroup>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <FormGroup htmlFor="inputStatus" label="Status: ">
                            <InputText id="inputStatus"
                                disabled={true}
                                name="status"
                                value={this.state.updated ? this.state.status : 'PENDENTE'} />
                        </FormGroup>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(LaunchRegister)