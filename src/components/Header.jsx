import { Helmet } from 'react-helmet';
import { Menu } from '.';

export default function Header() {
	return (
		<header>
			<Helmet defaultTitle="Home"
			        titleTemplate="%s | Ray Beliveau"/>
			<Menu/>
		</header>
	);
}
