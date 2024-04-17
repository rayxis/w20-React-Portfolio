import { menu } from '../data/config';
import { Link } from 'react-router-dom';

export default function Menu() {
	return (
		<nav className="nav">
			<ul>
				{menu.map((item) => (
					<li key={item.id}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}