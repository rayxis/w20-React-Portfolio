import { menuItems } from '../routes';
import { NavLink } from 'react-router-dom';

export default function Menu() {
	return (
		<nav className="menu">
			<ul className="menu__list">
				{/* Loop through the menu items and format them as list items with links */}
				{menuItems.map((item, index) => (
					<li key={index} className="menu__item">
						<NavLink to={item.path}
						         className={({ isActive }) => `link menu__link ${isActive ? 'menu__link--active' : ''}`}>{item.title}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
