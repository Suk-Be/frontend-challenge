import Link from 'next/link';
import { DatesContainer } from './datesContainer';
import { StarContainer } from './starContainer';
import styles from './TBody.module.css';

export const TBody = ({ RepoData }) => {
	const content = RepoData.map((RepoItem) => (
		<tr key={RepoItem.id}>
			<td>
				<details>
					<summary className={styles.summary}>{RepoItem.name}</summary>
					<ul>
						<li>
							<Link href={RepoItem.html_url}>
								<a className={styles.link} target="_blank">
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
				</details>
			</td>
			<td>
				<p className={styles.description}>{RepoItem.description}</p>
			</td>
		</tr>
	));

	return <tbody id="renderTable">{content}</tbody>;
};
