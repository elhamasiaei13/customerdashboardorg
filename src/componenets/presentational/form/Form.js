import React from 'react'
import FormInput from '../input/FormInput';
import CardBody from '../card/CardBody'

const Form = ({ formBody = '', formFooter = '', action = '', ...props }) => {
    return (
        <form className="form-horizontal"  {...props} >

            {props.children}

        </form>
    )
}
export default Form;

