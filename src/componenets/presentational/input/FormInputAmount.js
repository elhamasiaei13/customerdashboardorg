import React from 'react'
import { FormattedMessage } from 'react-intl';

const FormInputAmount = ({
    label = "false",
    value = "false",
    labelClassName = "col-sm-3",
    valueClassName = "col-md-9",
    pclassName = "",
    wrapperClassName = "",
    ...props }) => {

    const convert = () => {
        let arrayMoney = JSON.stringify(value).split("")
        let convertMoney = []
        const length = arrayMoney.length
        arrayMoney.map((item, index) => {
            if ((index % 3 == 0) && (index != 0)) {
                convertMoney.push(",")
            }
            convertMoney.push(item)

        })
        return (convertMoney)
    }
    return (
        <div className={"form-group row " + wrapperClassName}>
            {label !== "false" ? <label
                htmlFor="fname"
                className={"control-label  col-form-label  text-right " + labelClassName}
            >

                {" "}
                {label === "tohi" ? <>&nbsp;</> :
                    <>
                        {label}
                        {/* <FormattedMessage
                            id={label}
                            defaultMessage={label}
                        /> */}
                        :
                    </>}
            </label> : ''}
            {value !== "false" ?
                <div className={" " + valueClassName}>
                    <p className={"form-control " + pclassName}>
                        {/* {value} */}
                        {convert()}
                    </p>
                </div>
                : ''}

        </div>

    )
}
export default FormInputAmount;

