import { useState } from 'react';
import styles from './starContainer.module.css';

export const StarContainer = ({ starCount }) => {
	const [isAdded, setAdded] = useState(false);

	return (
		<li className="star-container">
			{!isAdded && (
				<>
					<span className={styles.star} alt="star"></span>
					<span className={styles.starCount}>{starCount}</span>
					<button className={styles.btnAddStar} onClick={setAdded}>
						add a star
					</button>
				</>
			)}
			{isAdded && (
				<>
					<span className={styles.star} alt="star"></span>
					<span className={styles.starCount}>
						<strong>{parseInt(starCount) + 1}</strong>
					</span>
					<button className={styles.btnAddStar} disabled>
						star added
					</button>
				</>
			)}
		</li>
	);
};
