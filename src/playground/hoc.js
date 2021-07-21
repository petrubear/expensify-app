console.log('hoc is loaded');
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>You must be authenticated to see this</p>
            )}
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);
// require authentication
const AuthInfo = requireAuthentication(Info);

// <AdminInfo isAdmin={true} info="there are the details"/>,
ReactDOM.render(
    <AuthInfo isAuthenticated={true} info="there are the details"/>,
    document.getElementById('app'),
);
