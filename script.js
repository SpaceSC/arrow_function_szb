/*
function pageLoad() { 
	console.log('running');
	}
	
	Alap eset arrow function-re:
	const pageLoad = () => {
	console.log('=> running');
	}

	Ha nem akarunk semmilyen paramétert a function-nek átadni, akkor lehet egyszerűsíteni:
	const pageLoad = _ => {
	console.log('=> running');
	}

	Automatikusan return-ölődik:
	const pageLoad = _ => {
	const returnText = _ => 'running';
	console.log(returnText());
	}

	Arrow function-el végzett művelet példa:
	const pageLoad = _ => {
	const adding = (a, b) => a + b;
	console.log(adding(4, 2));

	*/

	const pageLoad = _ => {
		const adding = (a, b) => a + b;
		console.log(adding(4, 2));
}
window.addEventListener('load', pageLoad);