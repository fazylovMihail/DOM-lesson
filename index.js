const firstParagraph = document.getElementById('first').innerHTML;
const secondParagraph = document.getElementById('second').innerHTML;
const thirdParagraph = document.getElementById('third').innerHTML;

const paragraphs = [firstParagraph, secondParagraph, thirdParagraph];

for(let i = 0;i<paragraphs.length;i++){
    console.log(paragraphs[i]);
}