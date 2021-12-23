import Layout from '../../components/PageLayout';
import { MetaData } from '../../staticData/MetaData';
import { TBody } from '../../components/TBody';
import styled from 'styled-components';

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
			<StyledDiv>
				<table>
					<thead>
						<tr>
							<th>Repository</th>
							<th>Description</th>
						</tr>
					</thead>
					<TBody RepoData={RepoData} />
				</table>
			</StyledDiv>
		</Layout>
	);
}

// make sticky behaviour crossbrowser safe
const stickyWrapper = `
	width: 100vw;
	height: 100vh;
	overflow-y: auto;
	margin-top: 0;
`;

const StyledDiv = styled('div')`
	${stickyWrapper}

	table {
		background-color: #fff;
		border-collapse: collapse;
		width: 100%;
		table-layout: fixed;
	}

	td,
	td * {
		vertical-align: top;
	}

	tr:nth-child(even) td {
		background: #f8f6ff;
	}

	th,
	td {
		padding: 15px;
	}

	th {
		position: sticky;
		top: 0;
		background: #005091;
		text-align: left;
		font-weight: normal;
		font-size: 1.1rem;
		color: white;
		z-index: 1;
	}

	td {
		padding-top: 10px;
		padding-bottom: 10px;
		color: #808080;
	}

	th:first-child,
	td:first-child {
		min-width: 200px;
		width: calc(33% - 30px);
	}

	th:last-child,
	td:last-child {
		border: 0;
		width: calc(100% - 30px);
	}

	@media only screen and (min-width: 768px) {
		th:first-child,
		td:first-child {
			width: 300px;
		}

		th:last-child,
		td:last-child {
			border: 0;
			width: calc(100% - 300px);
		}
	}
`;

export default Page;
