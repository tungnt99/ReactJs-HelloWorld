import React from 'react';
import './Nav.css';
import {  NavLink } from 'react-router-dom';
export default class Nav extends React.Component {  
    render(){
        return(
            <div className="topnav">
                <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Home</NavLink>
                <NavLink to="/usestate" activeClassName="active" >UseState</NavLink>
                <NavLink to="/twowaybinding" activeClassName="active" >TwoWayBinding</NavLink>
                <NavLink to="/todo" activeClassName="active" >Todo</NavLink>
                <NavLink to="/redirect" activeClassName="active" >Redirect</NavLink>
                <NavLink to="/products" activeClassName="active" >Products</NavLink>
                <NavLink to="/redux" activeClassName="active" >Redux</NavLink>

                

            </div>
        )
    }
}