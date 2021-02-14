import { Link } from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
	return (
		<div className="VendingMachine">
			<h1>Vending Machine</h1>
			<h3>Pick a Snack</h3>
			<div>
				<Link exact to="/chips">
					Chips
				</Link>
				<Link exact to="/candy">
					Candy
				</Link>
				<Link exact to="/soda">
					Soda
				</Link>
			</div>
		</div>
	);
};

export default VendingMachine;
