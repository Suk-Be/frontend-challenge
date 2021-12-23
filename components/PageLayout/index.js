import Link from 'next/link';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

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
					<StyledMain>{children}</StyledMain>
					<StyledFooter>
						<nav>
							<Link href={`/table`}>
								<a>
									<strong>→ to solution</strong>
								</a>
							</Link>
						</nav>
					</StyledFooter>
				</>
			)}
		</div>
	);
}

// general styling every page uses
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

// layout container styling
const containerStyles = `
	max-width: 70vw;
	padding: 0 1rem;
	margin: 3rem auto 6rem;
`
const StyledMain = styled('main')`
	${containerStyles}
`
const StyledFooter = styled('footer')`
	${containerStyles}
`