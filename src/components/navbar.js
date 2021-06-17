import React from 'react'
import { Menubar } from 'primereact/menubar';

function Navbar() {
    
    const items = [
        {
            label: 'Home',
            command:() => {
                console.log('Teste')
            }
        },
        {
            label: 'Usuário',
            command: () => {
                window.location.hash="/user-signup"
            }
        },
        {
            label: 'Lançamento'
        },
        {
            label: 'Login'
        }
    ]

    return (
        
        <Menubar model={items}/>
    )
}

export default Navbar