const form = document.querySelector("form");

const handleSubmit = (e) => {
	e.preventDefault();
	const brand = document.querySelector("input[name=brand]");
	const model = document.querySelector("input[name=model]");

	fetch("https://olive-bead-glazer.glitch.me", {
		method: "POST",
		body: JSON.stringify({
			brand: brand.value,
			model: model.value,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => response.json())
		.then(() => {
			successfullOperationMessage();
		})
		.catch((error) => {
			unSuccessfullOperationMessage();
			console.error(error);
		});
};
form.addEventListener("submit", handleSubmit);

const successfullOperationMessage = () => {
	const p = document.querySelector("p");
	p.style = "background-color: red";
	p.textContent = `Automobilis ${brand.value} ${model.value} sėkmingai pridėtas!`;
};

const unSuccessfullOperationMessage = () => {
	const p = document.querySelector("p");
	p.style = "background-color: red";
	p.textContent = `Ups.. Automobilis ${brand.value} ${model.value} nepridėtas..`;
};
