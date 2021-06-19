import React from 'react'
import { withRouter } from 'react-router-dom'
import LocalStorageService from '../service/local-storage-service'
import UserService from '../service/user/user-service'
import { Button } from 'primereact/button';

class Home extends React.Component {

    constructor() {
        super()
        this.userService = new UserService()
    }

    state = {
        value: 0
    }

    componentDidMount() {
        // const user = this.context.userAuthenticated
        const user = LocalStorageService.getItem('_user')

        this.userService.getBalanceByUserId(user.id)
            .then(response => {
                this.setState({ value: response.data.value })
            }).catch(error => {
                console.log(error.response)
            })
    }

    signup = () => {
        this.props.history.push('/user-signup')
    }

    registerLaunch = () => {
        this.props.history.push('/launch-register')
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.value}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <Button onClick={this.signup} className="p-button" icon="pi pi-users" label="Cadastrar Usuário" />
                    <Button onClick={this.signup} className="p-button-secondary" icon="pi pi-money-bill" label="Cadastrar Lançamento" />
                </p>
            </div>
        )
    }
}

export default withRouter(Home)