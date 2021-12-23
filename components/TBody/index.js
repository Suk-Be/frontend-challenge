import Link from 'next/link';
import { DatesContainer } from './datesContainer';
import { StarContainer } from './starContainer';
import styled from 'styled-components';

export const TBody = ({ RepoData }) => {
	const content = RepoData.map((RepoItem) => (
		<tr key={RepoItem.id}>
			<td>
				<StyledDetails>
					<summary className="summary">{RepoItem.name}</summary>
					<ul>
						<li>
							<Link href={RepoItem.html_url}>
								<a className="link" target="_blank">
									visit repo
								</a>
							</Link>
						</li>
						<DatesContainer
							updated={RepoItem.updated_at}
							created={RepoItem.created_at}
						/>
						<StarContainer starCount={RepoItem.stargazers_count} />
					</ul>
				</StyledDetails>
			</td>
			<td>
				<p className="description">{RepoItem.description}</p>
			</td>
		</tr>
	));

	return <tbody id="renderTable">{content}</tbody>;
};

const StyledDetails = styled('details')`
	.summary {
		cursor: pointer;
	}

	.link {
		display: inline-block;
		padding-bottom: 0.3rem;
		text-decoration: underline;
	}

	.description {
		color: #4a4a4a;
		word-wrap: break-word;
		padding: 0;
		margin: 0;
	}
`;
