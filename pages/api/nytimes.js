import axios from 'axios';

export const getArticles = async (err) => {
	try {
		const options = {
			method: 'GET',
			url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.NYT_Key}`,
		};

		const res = await axios.request(options);
		console.log(res.data);
	} catch {
		if (err) throw err;
	}
};
