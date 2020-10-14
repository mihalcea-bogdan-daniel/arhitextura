import React from 'react'
import './formpage.styles.scss'

/**
 * A component that takes a component and displays it
 * @param {React.Component} props.formular - A form that will be shown
 */
const FormPage = (props) => {
    return (
        <div className="form">
            {props.formular}
        </div>
    )
}
export default FormPage;