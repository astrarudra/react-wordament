import React, { Component } from 'react';
import logo from '../logo.svg'

const Footer = () => {
	return (
		<div className="footer">
			<footer className="d-flex">
				<img className="app-logo" src={logo}></img>
				<div className="v-center" style={{ marginTop: '16px' }}>
					<div>Built with love using ReactJS</div>
					<div className="fs-sm">© 2019 Copyright - Rudra Roy</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
