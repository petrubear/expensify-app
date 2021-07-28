import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoute = ({
    isAuthenticated,
    component: Component, // renombra component a Component
    ...rest // rest es lo que queda del destructor de ... props que no se nombra directamente
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard"/>
        ) : (
            <Component {...props} />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);


