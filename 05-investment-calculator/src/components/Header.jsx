/** @format */
import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
	return (
		<header id='header'>
			<img src={logo} alt='logo' />
			<h1>React Investments Calculator</h1>
		</header>
	);
}
