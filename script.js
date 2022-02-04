fetch("https://olive-bead-glazer.glitch.me")
	.then((resp) => resp.json())
	.then((posts) => {
		console.log(posts);
		createTableWithData(posts);
	});

const createTableWithData = (posts) => {
	// --- creating table ---
	const table = document.createElement("table");
	// --- creating first row with th's ---
	const trForTh = document.createElement("tr");
	const userObjectOne = posts[0];
	const keys = Object.keys(userObjectOne);
	keys.forEach((keys) => {
		const th = document.createElement("th");
		th.innerText = keys.toUpperCase();
		trForTh.append(th);
	});
	table.append(trForTh);
	// --- creating tr's and adding td's ---
	for (let i = 0; i < posts.length; i++) {
		const userObject = posts[i];
		const trNew = document.createElement("tr");
		const values = Object.values(userObject);
		values.forEach((values, index) => {
			const tdNew = document.createElement("td");
			tdNew.innerText = values.toUpperCase();
			trNew.append(tdNew);
		});
		table.append(trNew);
		// --- table init to html ---
		document.body.append(table);
	}
};
