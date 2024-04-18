import { Helmet } from 'react-helmet';

export default function NotFound() {
	return (
		<section className="notfound">
			<Helmet>
				<title>Page Not Found</title>
				<meta name="description" content="Page Not Found" />
			</Helmet>
		</section>
	);
}
