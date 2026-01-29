const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')

const regExp = /^[a-zA-Z0-9]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "ERROR"
        gmailResult.style.color = "red"
    }

}

const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let num = 0 
const max = parentBlock.clientWidth - childBlock.offsetWidth

function moveBloc(){
    childBlock.style.left = num +'px'
    if (num < max) {
        num += 1; 
        requestAnimationFrame(moveBloc);
    }
}
moveBloc()