//FUNÇÃO CRIA BOTÃO
// let button = document.getElementById('container-button')
// function createButton(){
//     let buttons = document.createElement('button');
//     buttons.innerText = 'REINICIAR'
//     buttons.type = 'reset';
//     button.appendChild(buttons)


// }createButton()
////////////////////////////////////////////////////
let lineOne = document.getElementById('first-line');
let lineTwo = document.getElementById('second-line');
let lineThree = document.getElementById('third-line')
    function creatElements(){
        let count = 3;
        for(let i=0; i<count; i+=1){
            let element = document.createElement('div');
            element.className = 'canva';
            element.addEventListener('click',function(event){
                console.log(event.target.id);
            })
            let elementTwo = document.createElement('div');
            elementTwo.className = 'canva';
            let elementThree = document.createElement('div')
            elementThree.className = 'canva'

            lineOne.appendChild(element);
            lineTwo.appendChild(elementTwo);
            lineThree.appendChild(elementThree);

        }
    }creatElements()  
    
    
    function captureColor (){
        let x = document.getElementById('choose-x');
        let y = document.getElementById('choose-y');
        let xy = document.querySelectorAll('.selected');
        x.addEventListener('click', function(event){ 
            xy.classList.remove('selected')
            event.target.classList.add('selected')
            console.log(event.target.id);
        })
        y.addEventListener('click', function(event){
            xy.classList.remove('selected');
            /* event.target.classList.add('selected'); */
            
            console.log(event.target.id);
        })
    }captureColor();

    