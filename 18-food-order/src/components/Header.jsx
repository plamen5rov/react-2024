/** @format */
import { useContext } from 'react';
import logoImage from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
function Header() {
	const cartCtx = useContext(CartContext);
	const totalCartItems = cartCtx.items.reduce((total, item) => {
		return total + item.quantity;
	}, 0);
	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logoImage} alt='logo' />
				<h1>ReactFood</h1>
			</div>
			<nav>
				<Button textOnly>Cart ({totalCartItems})</Button>
			</nav>
		</header>
	);
}

export default Header;
