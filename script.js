onsole.log(document);

const getMainTitle = document.getElementById('mainTitle')
const changeColor = getMainTitle.style.color = 'yellow'
console.log(getMainTitle)

const getParagraph = document.querySelector('.myParagraph')
const changeParagraph = getParagraph.textContent = 'I am changing the text content regardless of whet is there before'
console.log(getParagraph)

