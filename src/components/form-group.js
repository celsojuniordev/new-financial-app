import React from 'react'

function FormGroup(props) {
    return (
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col">
                <label htmlFor={props.htmlFor} >{props.label}</label>
                {props.children}
            </div>
        </div>
    )
}

export default FormGroup