export const githubURL = `https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc`;

export const fetchData = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return data;
};
