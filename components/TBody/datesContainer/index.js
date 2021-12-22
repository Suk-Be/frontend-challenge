import styles from './datesContainer.module.css';

export const DatesContainer = ({
	updated, 
	created
}) => {
	return (
		<li>
			<span className={styles.updated}>
				updated:
				<time dateTime={updated}>{updated.substr(0, 10)}</time>
			</span>
			<br />
			<span className={styles.created}>
				created:
				<time dateTime={created}>{created.substr(0, 10)}</time>
			</span>
		</li>
	);
};
