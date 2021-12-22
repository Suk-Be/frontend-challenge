import Layout from '../../components/PageLayout';
import { MetaData } from '../../staticData/MetaData';
import { TBody } from '../../components/TBody';
import styles from './table.module.css';

// prerender on server side
export async function getStaticProps() {
	const res = await fetch(
		`https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc`
	);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	const filtered = await data.items.sort((a, b) => {
		return new Date(b.updated_at) - new Date(a.updated_at);
	});

	return {
		props: {
			MetaData,
			RepoData: filtered,
		},
	};
}

function Page({ MetaData: { tablePage }, RepoData }) {
	return (
		<Layout siteMetaContent={tablePage}>
			<div className={styles.stickytable}>
				<table>
					<thead>
						<tr>
							<th>Repository</th>
							<th>Description</th>
						</tr>
					</thead>
					<TBody RepoData={RepoData}/>
				</table>
			</div>
		</Layout>
	);
}

export default Page;
