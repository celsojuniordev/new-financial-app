import React from 'react'

function FormGroup(props) {
    return (
        <div className="p-fluid p-formgrid">
            <div className="p-field">
                <span className="p-float-label">
                    {props.children}
                    <label htmlFor={props.htmlFor} >{props.label}</label>
                </span>
            </div>
        </div>
    )
}

export default FormGroup