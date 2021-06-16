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
            label: 'Usuário'
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