import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink exact to="/chips">
				Chips
			</NavLink>
			<NavLink exact to="/candy">
				Candy
			</NavLink>
			<NavLink exact to="/soda">
				Soda
			</NavLink>
		</nav>
	);
};

export default Navbar;
