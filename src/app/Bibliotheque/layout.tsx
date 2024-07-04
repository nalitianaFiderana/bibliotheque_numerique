'use client';

import {useState} from 'react';

export default function Layout({
	children,}: Readonly<{
		children : React.ReactNode;
	}>
){
	let [showMenu, SetShowMenu] = useState(false);
	let toggleMenu = () => {
		SetShowMenu(!showMenu);
	}
	return(
		<div className="MainLayout">
			<div className="barNav">
				<h1 className="left title">Bibliotheque Numerique</h1>
				<div className="right">
					<h2 className="avatar">NR</h2>
					<div className={`menu ${showMenu ? 'quit' : ''}`} onClick={()=>toggleMenu()}>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
				</div>
			</div>
			<div className="listMenu">
				<h1 className="title">Bibliotheque Numerique</h1>
				<div className="elet">
					<div className="img">a</div>
					<a>Mon compte</a>
				</div>
				<div className="elet">
					<div className="img">a</div>
					<a>Mon compte</a>
				</div>
				<div className="elet">
					<div className="img">a</div>
					<a>Mon compte</a>
				</div>
				<div className="elet">
					<div className="img">a</div>
					<a>Mon compte</a>
				</div>
			</div>
			{children}
		</div>
	);
}