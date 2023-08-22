
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const generateButton = document.getElementById('generateButton');
const outputElement = document.getElementById('output');

generateButton.addEventListener('click', () => {
 
    const name = nameInput.value;
    const age = ageInput.value;

    const greeting = 'Hello '+ name +' , '+'you are '+ age +" years old!!";

  
    outputElement.textContent = greeting;
});
