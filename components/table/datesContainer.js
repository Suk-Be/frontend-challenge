import styled from 'styled-components';

export const DatesContainer = ({ updated, created }) => {
	return (
		<StyledList>
			<span className="updated">
				updated:
				<time dateTime={updated}>{updated.substr(0, 10)}</time>
			</span>
			<br />
			<span className="created">
				created:
				<time dateTime={created}>{created.substr(0, 10)}</time>
			</span>
		</StyledList>
	);
};

const StyledList = styled('li')`
	.updated,
	.created {
		display: inline-block;
		padding-bottom: 0.3rem;
	}
`;
