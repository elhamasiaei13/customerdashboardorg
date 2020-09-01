import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Activity({ to = "", icon = "mdi mdi-adjust",
    ...props }) {
    return (
        <div>
            <Link to="/">
                <i className={icon}></i>
            </Link>
        </div>
    )
}

