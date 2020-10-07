import React from 'react'
import './formpage.styles.scss'


const FormPage = (props) => {
    return (
        <div className="form">
            {props.formular}
        </div>
    )
}
export default FormPage;