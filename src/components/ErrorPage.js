import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="not-found">
            <h2>Page not found!!:(</h2>
            <Link to="/">Back to home..</Link>
        </div>
    )
}
export default ErrorPage