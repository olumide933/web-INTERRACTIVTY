console.log(document);

// const getMainTitle = document.getElementById('mainTitle').style.color = 'blue'
// const changeColor = getMainTitle.style.color = 'blue'
// console.log(getMainTitle)

// const getParagraph = document.querySelector('.myParagraph')
// const changeParagraph = getParagraph.textContent = 'I am changing the text content regardless of what is there before'
// console.log(getParagraph)

// const myChangeFont = getParagraph.style.fontSize ='30px'
// console.log(getParagraph)

// const ChangeFont = getParagraph.style.fontWeight ='bold'
// console.log(getParagraph)

// myEventButton.addEventListener('click', () =>{
//     alert('i have been clicked from the javascript')
//     })

// const handleInput =document.getElementById('myInput')
// console.log(handleInput.value)

// const handleForm =document.getElementById('myForm')
// console.log(handleForm)

// const handleParagraph=document.getElementById('myName')
// console.log(handleParagraph)



// handleForm.addEventListener('submit',(e) =>{
//     e.preventDefault()
//     console.log(handleInput.value)
//     handleParagraph.textContent =handleInput.value
    
// })

// const box =document.getElementById('myBox')

// function addHighlight(){
//     box.classList.add('highlight')
// }

// const anodaHighlight = document.getElementById('highBtn')
// anodaHighlight.addEventListener('click',()=>{
//     box.classList.add('highlight')
// })

// function removeHighlight(){
//     box.classList.remove('highlight')
// }

// const validateInput =document.getElementById('myInput')
// if(validateInput.value.trim() ===""){
//     alert("please eneter an input")
// }

// TODO

const list = document.getElementById('todoList')
const input = document.getElementById('todoInput')
const button = document.getElementById('addTodo')

button.addEventListener('click',() =>{
    if(input.value.trim() !==""){
        const li = document.createElement('li')
        li.textContent = input.value
        list.appendChild(li)
        input.value =''
        console.log(li)
    }else{
        alert('please enter Todo')
    }
})
// console.log(list)