import { useState } from 'react';
import styled from 'styled-components';

export const StarContainer = ({ starCount }) => {
	const [isAdded, setAdded] = useState(false);

	return (
		<StyledList>
			{!isAdded && (
				<>
					<span className='star' alt="star"></span>
					<span className='starCount'>{starCount}</span>
					<button className='btnAddStar' onClick={setAdded}>
						add a star
					</button>
				</>
			)}
			{isAdded && (
				<>
					<span className='star' alt="star"></span>
					<span className='starCount'>
						<strong>{parseInt(starCount) + 1}</strong>
					</span>
					<button className='btnAddStar' disabled>
						star added
					</button>
				</>
			)}
		</StyledList>
	);
};

const StyledList = styled('li')`
	.star,
	.starCount {
		padding: 0;
		margin: 0;
	}

	.star {
		position: relative;

		display: inline-block;
		width: 0;
		height: 0;

		margin-top: 0.3rem;
		margin-left: 0.9em;
		margin-right: 0.9em;
		margin-bottom: 1.2em;

		border-right: 0.3em solid transparent;
		border-bottom: 0.7em solid #fc0;
		border-left: 0.3em solid transparent;

		font-size: 0.5rem;
	}

	.star:before,
	.star:after {
		content: '';

		display: block;
		width: 0;
		height: 0;

		position: absolute;
		top: 0.6em;
		left: -1em;

		border-right: 1em solid transparent;
		border-bottom: 0.7em solid #fc0;
		border-left: 1em solid transparent;

		transform: rotate(-35deg);
	}

	.star:after {
		transform: rotate(35deg);
	}

	.starCount {
		display: inline-block;
		margin: 0 0.3rem 0;
	}

	.btnAddStar {
		background: #adadad;
		color: #000;
		border: none;
		cursor: pointer;
		font-weight: normal;
		padding: 5px 8px;
		outline: none;
		min-width: 90px;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
		border-radius: 5px;
		margin-left: 0.3rem;
	}

	.btnAddStar:hover,
	.btnAddStar:focus,
	.btnAddStar:active {
		border: none;
		font-weight: bolder;
	}

	.btnAddStar:disabled {
		background: #f4f4f4;
		color: #adadad;
		font-weight: normal;
		cursor: auto;
	}
`;
