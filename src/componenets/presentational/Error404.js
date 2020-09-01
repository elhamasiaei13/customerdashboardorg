import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';

export default function Error404() {
    return (
        <div className="error-box">
            <div className="error-body text-center">
                <h1 className="error-title text-danger">
                    404
                </h1>
                <h3 className="text-uppercase error-subtitle">
                    صفحه ای پیدا نشد
                 </h3>
                <p className="text-muted m-t-30 m-b-30">
                    YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
                </p>
                <Link to="/">
                    <div className="m-icon">
                        <i className="m-r-10 mdi mdi-home-outline">
                        </i>
                        <span>
                            برگشت به صفحه اصلی
                            </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
