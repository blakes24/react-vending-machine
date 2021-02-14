import { Link } from 'react-router-dom';
import './Candy.css';

const Candy = () => (
	<div className="Candy">
		<h1>Candy</h1>
		<Link exact to="/">
			Go Back
		</Link>
	</div>
);

export default Candy;
