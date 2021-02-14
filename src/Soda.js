import { Link } from 'react-router-dom';
import './Soda.css';

const Soda = () => (
	<div className="Soda">
		<h1>Soda</h1>
		<Link exact to="/">
			Go Back
		</Link>
	</div>
);

export default Soda;
