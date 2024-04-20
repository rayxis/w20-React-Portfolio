import { Helmet } from 'react-helmet';
import { Menu } from '.';

export default function Header() {
	return (
		<header className="page-header">
			<Menu/>
		</header>
	);
}
