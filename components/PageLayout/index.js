import styles from './PageLayout.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

export default function Layout({
	children,
	homePage,
	siteMetaContent: { title, description },
}) {
	return (
		<div>
			<Head>
				<meta name="description" content={description} />
				<meta name="og:title" content={title} />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<GlobalStyle />
			{!homePage && <main>{children}</main>}
			{homePage && (
				<>
					<main className={styles.homePage}>{children}</main>
					<footer className={styles.toTable}>
						<nav>
							<Link href={`/table`}>
								<a>
									<strong>→ to solution</strong>
								</a>
							</Link>
						</nav>
					</footer>
				</>
			)}
		</div>
	);
}

const GlobalStyle = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: 1rem;
		background: white;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}

	h1 {
		font-size: 1.5rem;
	}

	h2 {
		font-size: 1rem;
	}
`;