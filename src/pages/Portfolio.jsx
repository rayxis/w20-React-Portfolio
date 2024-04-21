import { Helmet } from 'react-helmet';
import { projects } from '../data/portfolioData';
// Load CSS
import '../assets/styles/portfolio.scss';

export default () => (
	<main className="content portfolio">
		<Helmet>
			<title>Portfolio</title>
			<meta name="description" content="Portfolio"/>
		</Helmet>
	</main>
);
