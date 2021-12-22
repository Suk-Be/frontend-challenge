import styles from './PageLayout.module.css';
import Link from 'next/link';
import Head from 'next/head';

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
			{!homePage && <main>{children}</main>}
			{homePage && (
				<>
					<main className={styles.homePage}>{children}</main>
					<footer className={styles.toTable}>
						<nav>
							<Link href={`/table`}>
								<a><strong>→ to solution</strong></a>
							</Link>
						</nav>
					</footer>
				</>
			)}
		</div>
	);
}
