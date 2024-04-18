import { Helmet } from 'react-helmet';

export default function About() {
	return (
		<section className="about">
			<Helmet>
				<title>About</title>
				<meta name="description" content="This is the about page"/>
			</Helmet>
		</section>
	);
}
