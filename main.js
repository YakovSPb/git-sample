const firstRow = document.querySelectorAll('tr td:nth-child(2)')
const secondRow = document.querySelectorAll('tr td:nth-child(3)')
const thirdRow = document.querySelectorAll('tr td:nth-child(4)')
const resultfirstRow = document.querySelectorAll('tr:nth-child(4) th')
let summFirstRow = 0, summSecondRow = 0, summThirdRow = 0;


firstRow.forEach(e=>{
	summFirstRow += +e.innerHTML;
})

secondRow.forEach(e=>{
	summSecondRow += +e.innerHTML;
})

thirdRow.forEach(e=>{
	summThirdRow += +e.innerHTML;
})



resultfirstRow[1].innerHTML = summFirstRow;
resultfirstRow[2].innerHTML = summSecondRow;
resultfirstRow[3].innerHTML = summThirdRow;
