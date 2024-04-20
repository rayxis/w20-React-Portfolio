import { Helmet } from 'react-helmet';
// Load CSS
import '../assets/styles/portfolio.scss';

export default function Portfolio() {
	return (
		<section className="portfolio">
			<Helmet>
				<title>Portfolio</title>
				<meta name="description" content="Portfolio" />
			</Helmet>
		</section>
	);
}
