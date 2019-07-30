import React, { Component } from 'react';
import logo from '../assets/logo.jpg'

const NavBar = ({ setStore }) => {
	return (
		<div className="nav-header aligner">
			<div onClick={() => setStore({ pageSelected: 'home' })} style={{ cursor: 'pointer' }}>
				<img className="wordament" src={logo} height="65"></img>
			</div>
		</div>
	);
};

export default NavBar;
