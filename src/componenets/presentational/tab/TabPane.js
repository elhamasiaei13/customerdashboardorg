import React from 'react';



const TabPane = ({name="name"}) => {
    const href="#"+name
    return (
        
                <li className="nav-item">
                 <a className="nav-link" data-toggle="tab" href={href} role="tab" aria-selected="false">
                    <span className="hidden-sm-up"><i className="ti-home"></i></span> 
                    <span className="hidden-xs-down">{name}</span></a> </li>

    )
}
export default TabPane;