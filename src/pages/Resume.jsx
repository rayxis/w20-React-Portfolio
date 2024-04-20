import { Helmet } from 'react-helmet';
// Load CSS
import '../assets/styles/resume.scss';

export default function Resume() {
	return (
		<section className="resume">
			<Helmet>
				<title>Résumé</title>
				<meta name="description" content="Résumé" />
			</Helmet>
		</section>
	);
}
