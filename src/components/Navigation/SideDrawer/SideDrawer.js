import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/_Aux/_Aux';

const sideDrawer = (props) => {
	let attachedstyles = [styles.SideDrawer, styles.Close];
	if (props.open) {
		attachedstyles = [styles.SideDrawer, styles.Open];
	}
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedstyles.join(' ')}>
				<div className={styles.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
