/** @format */

import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';

function Cart() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);
	const cartTotal = cartCtx.items.reduce(
		(sum, item) => sum + item.quantity * item.price,
		0
	);
	function handleCloseCart() {
		userProgressCtx.hideCart();
	}
	return (
		<Modal className='cart' open={userProgressCtx.progress === 'cart'}>
			<h2>Your cart</h2>
			<ul>
				{cartCtx.items.map((item) => (
					<li key={item.id}>
						{item.name} - {item.quantity}
					</li>
				))}
			</ul>
			<p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
			<p className='modal-actions'>
				<Button textOnly onClick={handleCloseCart}>
					Close
				</Button>
				<Button onClick={handleCloseCart}>Go to Checkout</Button>
			</p>
		</Modal>
	);
}

export default Cart;
