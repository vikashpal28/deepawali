function changeColors() { const elements1 = document.querySelectorAll('.upper1, .lower2');
const elements2 = document.querySelectorAll('.upper2, .lower1'); 
elements1.forEach(element => { element.style.backgroundColor = element.style.backgroundColor === 'green' ? 'red' : 'green'; });
elements2.forEach(element => { element.style.backgroundColor = element.style.backgroundColor === 'blue' ? 'yellow' : 'blue'; }); 
} 
setInterval(changeColors, 1000); // Change colors every second