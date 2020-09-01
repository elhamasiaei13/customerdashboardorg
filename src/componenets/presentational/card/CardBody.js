import * as React from 'react';
import Breadcrumb from '../breadcrumb/Breadcrumb';
export default function CardBody({
    cardTitle = "false",
    cardSubtitle = false,
    cardBodyClass = " ",
    body = "",
    noHr = false,
    ...props }) {

    return (
        <div className={"card-body " + cardBodyClass} >
            {cardTitle != 'false' ? <><h4 className="card-title text-info m-b-0"
                style={{ "margin": "0px 0px 10px 0px" }}>
                {cardTitle}</h4>
                {noHr ? '' :
                    <hr className="hrCard" />}
            </> : <></>}
            {cardSubtitle ? <h6 className="card-subtitle"> {cardSubtitle} </h6> : ''}
            {body}
            {props.children}
        </div>
    );
}