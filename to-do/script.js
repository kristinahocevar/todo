//u varijable spremamo elemente na koje dodajemo evente i elemente u koje kreiramo nove elemente
let buttonAdd = document.querySelector(".add");
let input = document.querySelector(".inputTask");
let ul = document.querySelector("ul");


//funkcija kojom kreiramo element li i u njemu checkbox, text iz inputa i gumb delete
function createListElement() {
	let checkbox = document.createElement("input");
	checkbox.type="checkbox";
	checkbox.id = "checkbox"
	
	let taskText = document.createTextNode(input.value);
	
	let buttonDelete = document.createElement("button");
	buttonDelete.innerHTML = "Delete";

	
//kreiramo list item( new task)  
	let li = document.createElement("li");
	

//apend 
    li.append(buttonDelete);	
	li.append(checkbox);
	li.appendChild(taskText);
	ul.appendChild(li);
	
	input.value = ""; //čistimo input
	input.onblur=function(){
		input.focus();
  };
	
	

//na button delete stavljamo event listener za brisanje list item-a
buttonDelete.addEventListener("click", function deleteListItem() {
	ul.removeChild(li);
  });


//na checkbox stavljamo event listener za križanje nakon kreirane liste
checkbox.addEventListener("click", function toggleDone() {
	li.classList.toggle('done');
	});
} //završetak funkcije kriranja novog elementa i unutar te funkcije mora biti sve vezano uz kreirane elemente



//postavljanje event listenera na gumb add i input
buttonAdd.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//kreiranje funkcije na klik 
function addListAfterClick() {
	if (input.value.length > 0) {
		createListElement();
	}
}


//...i na pritisak tipke enter
function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();
	}
}

