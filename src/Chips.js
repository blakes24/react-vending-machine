import { Link } from 'react-router-dom';
import './Chips.css';

const Chips = () => (
	<div className="Chips">
		<h1>Chips</h1>
		<Link exact to="/">
			Go Back
		</Link>
	</div>
);

export default Chips;
