import React from 'react'
import { Menubar } from 'primereact/menubar';

function Navbar() {
    
    const items = [
        {
            label: 'Home',
            command:() => {
                window.location.hash="/home"
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
        
        <Menubar className="menubar" model={items}/>
    )
}

export default Navbar