// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
// in cui è presente il nome dell’icona e l’icona stessa.

const iconsList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	}
];

// Milestone 2
// Ciascuna icona ha una proprietà “color”: 
// utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

function createBoxIcons(element){
	return `
		<div class="box d-flex flex-column justify-content-center align-items-center ${element.color}">
			<i class="${element.family} ${element.prefix}${element.name}"></i>
			<div class="printed-name">${element.name.toUpperCase()}</div>
		</div> 
	`
};

const containerIcons = document.querySelector('.container-icons');

function printIcons(containerIcons, iconsList) {
	iconsList.forEach((icon) => {
		containerIcons.innerHTML += createBoxIcons(icon);
	});
};
printIcons(containerIcons, iconsList);

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone 
//(animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, 
//visualizzare solamente le icone corrispondenti.

//UTILIZZARE SelectElement PER SELEZIONARE GLI ELEMENTI 
//UTILIZZARE .filter PER FILTRARE LE ICONE (.value)
const selectElementType = document.querySelector('.filter-type');
const selectElementColor = document.querySelector('.filter-color');

// SELECT PER TYPE
selectElementType.addEventListener('change', function(event) {
	containerIcons.innerHTML = '';
	const filtredIcons = iconsList.filter(function(icon) {
		// if (selectElementType.value === icon.type || selectElementType.value === 'all'){
		// 	return true;
		// }
		// return false;
		return selectElementType.value === icon.type || selectElementType.value === 'all';
	})

	printIcons(containerIcons, filtredIcons);
	// console.log(selectElementType.value)
	// console.log(filtredIcons)
});

// SELECT PER COLOR
selectElementColor.addEventListener('change', function(event) {
	containerIcons.innerHTML = '';
	const filtredIcons = iconsList.filter(function(icon) {
		return selectElementColor.value === icon.color || selectElementColor.value === 'all';
	})

	printIcons(containerIcons, filtredIcons);
	// console.log(selectElementColor.value)
	// console.log(filtredIcons)
});