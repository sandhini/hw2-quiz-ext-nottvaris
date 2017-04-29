// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

	let data1 = null;
	let data2 = null;
	let data3 = null;
	let text = null;
	let contents = null;
	const h1 = document.querySelector('section.results h1');
	const p = document.querySelector('section.results p');


function onClick(event){

	const container = event.currentTarget;

	//change state of checked and unchcked boxes


		if (container.matches('.choice-grid div[data-question-id="one"')){
			for (const box of gridDiv1){
				if (box !== container){
					const image = box.querySelector('.checkbox');
					image.src = 'images/unchecked.png'; //!!
					box.style.opacity = 0.6;
					box.style.backgroundColor = '#f4f4f4';

				} else {
					const image = box.querySelector('.checkbox');
					image.src = 'images/checked.png'; //!
					box.style.opacity = 1;
					box.style.backgroundColor = '#cfe3ff';
				}

			}
		
		} else if (container.matches('.choice-grid div[data-question-id="two"')){
			for (const box of gridDiv2){
				if (box !== container){
					const image = box.querySelector('.checkbox');
					image.src = 'images/unchecked.png'; //!!
					box.style.opacity = 0.6;
					box.style.backgroundColor = '#f4f4f4';

				} else {
					const image = box.querySelector('.checkbox');
					image.src = 'images/checked.png'; //!
					box.style.opacity = 1;
					box.style.backgroundColor = '#cfe3ff';
				}

			}
		
		} else if (container.matches('.choice-grid div[data-question-id="three"')){
			for (const box of gridDiv3){
				if (box !== container){
					const image = box.querySelector('.checkbox');
					image.src = 'images/unchecked.png'; //!!
					box.style.opacity = 0.6;
					box.style.backgroundColor = '#f4f4f4';

				} else {
					const image = box.querySelector('.checkbox');
					image.src = 'images/checked.png'; //!
					box.style.opacity = 1;
					box.style.backgroundColor = '#cfe3ff';
				}

			}
		
		}


		//get data on what answer choices have been selected so far
		if (container.matches('.choice-grid div[data-question-id="one"')){
			data1 = container.dataset.choiceId
			// console.log(data1);
		} else if (container.matches('.choice-grid div[data-question-id="two"')){
			data2 = container.dataset.choiceId
			// console.log(data2);
		} else if (container.matches('.choice-grid div[data-question-id="three"')){
			data3 = container.dataset.choiceId
			// console.log(data3);
		} 

		//Display Results
		if(data1 !== null && data2 !== null && data3 !== null){ //if if all the questions have been asnwered or not


			if (data1 === data2){
				//add a title and contents
				title = RESULTS_MAP[data1]['title'];
				contents = RESULTS_MAP[data1]['contents'];
				h1.textContent = ("You got: " + title);
				p.textContent = contents;
				//add a restart quiz button
				const restart = document.querySelector('section div#restart');
				restart.classList.add('hidden');
				restart.classList.remove('hidden');
				
				// console.log(title);
				// console.log(contents);
			} else if (data2 === data3){
				//add a title and contents
				title = RESULTS_MAP[data2]['title'];
				contents = RESULTS_MAP[data2]['contents'];
				h1.textContent = ("You got: " + title);
				p.textContent = contents;
				//add a restart quiz button
				const restart = document.querySelector('section div#restart');
				restart.classList.add('hidden');
				restart.classList.remove('hidden');

			} else if (data1 === data3){
				//add a title and contents
				title = RESULTS_MAP[data3]['title'];
				contents = RESULTS_MAP[data3]['contents'];
				h1.textContent = ("You got: " + title);
				p.textContent = contents;
				//add a restart quiz button
				const restart = document.querySelector('section div#restart');
				restart.classList.add('hidden');
				restart.classList.remove('hidden');

			} else if (data1 !== data2 && data1 !== data3 && data2 !== data3) {
				//add a title and contents
				title = RESULTS_MAP[data1]['title'];
				contents = RESULTS_MAP[data1]['contents'];
				h1.textContent = ("You got: " + title);
				p.textContent = contents;
				//add a restart quiz button
				const restart = document.querySelector('section div#restart');
				restart.classList.add('hidden');
				restart.classList.remove('hidden');
			
			}

			//lock all answers
			const allContainer = document.querySelectorAll('.choice-grid div');
			for (const item of allContainer) {
				item.removeEventListener('click', onClick);
			}

			//restart quiz button clicked
			if(container === restartButton){
				
				for (const item of allContainer) {
					item.style.opacity = 1;
					item.style.backgroundColor = '#f4f4f4';
					item.addEventListener('click', onClick); 
					const image = item.querySelector('.checkbox'); //grab all checkbox images
					image.src = 'images/unchecked.png'; // change it back to unchecked
					restart.classList.add('hidden');
					h1.textContent = null; //turn <h1> tag of the result off
					p.textContent = null; //turn <p> tag of the result off


				}

				data1 = null;
				data2 = null;
				data3 = null;
				const pickUp = document.querySelector('section.question-name');
				pickUp.scrollIntoView();
				
			}

		}
		

}

// const gridDiv = document.querySelectorAll('.choice-grid div');
// // console.log(gridDiv);
// for (const item of gridDiv) {
//   item.addEventListener('click', onClick);
// }

const gridDiv1 = document.querySelectorAll('.choice-grid div[data-question-id="one"]');
// console.log(gridDiv1);
for (const item of gridDiv1) {
  item.addEventListener('click', onClick);
}

const gridDiv2 = document.querySelectorAll('.choice-grid div[data-question-id="two"]');
for (const item of gridDiv2) {
  item.addEventListener('click', onClick);
}

const gridDiv3 = document.querySelectorAll('.choice-grid div[data-question-id="three"]');
for (const item of gridDiv3) {
  item.addEventListener('click', onClick);
}

const restartButton = document.querySelector('div.hidden');
restartButton.addEventListener('click', onClick);



