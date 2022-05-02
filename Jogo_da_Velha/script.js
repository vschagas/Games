//FUNÇÃO CRIA BOTÃO
// let button = document.getElementById('container-button')
// function createButton(){
//     let buttons = document.createElement('button');
//     buttons.innerText = 'REINICIAR'
//     buttons.type = 'reset';
//     button.appendChild(buttons)


// }createButton()
////////////////////////////////////////////////////
let lineOne = document.getElementById('container-canva');
let changeButton = document.querySelectorAll('.block');

    function creatElements(){
        let count = 9;
        for(let i=0; i<count; i+=1){
            let element = document.createElement('div');
            element.id = i;
            element.className = 'canva';
            element.addEventListener('click', changeColor);

            lineOne.appendChild(element);  
        }
    }creatElements()  

    

    function changeColor(event){
        let type = document.querySelector('.selected')
        event.target.innerText = type.innerText
        let textBase = type.innerText
        let box = document.querySelectorAll('.canva');
            for(let i=0; i<box.length; i+=1){
                let compare = box[i].innerText
                if(compare[0]===x && compare[1]===x && compare[2]===x){
                    console.log('acerto');
                }
            }
            
        
        



        
    }changeColor;
    
    function captureColor (){
        let x = document.getElementById('choose-x');
        let y = document.getElementById('choose-y');
        
        x.addEventListener('click', function(event){ 
            let xy = document.querySelector('.selected');
            xy.classList.remove('selected')
            event.target.classList.add('selected')
            console.log(event.target.id);
        })
        y.addEventListener('click', function(event){
            let xy = document.querySelector('.selected');
            xy.classList.remove('selected');
            event.target.classList.add('selected');
            
            console.log(event.target.id);
        })
    }captureColor();

   


    let x = document.getElementById('choose-x').innerText
    let o = document.getElementById('choose-y').innerText
    function sendColor(){ 
        let lineColor = document.querySelectorAll('.canva')      
        for(i=0; i<lineColor.length; i+=1){ 
            lineColor[i].addEventListener('click', function(event){
                let captureColor = document.querySelector('.selected');        
                
                if(captureColor.id === 'choose-x'){
                event.target.style.backgroundColor = 'rgb(34, 51, 59)';
                /* console.log(x); */
                }
                if(captureColor.id === 'choose-y'){
                    event.target.style.backgroundColor = 'rgb(94, 80, 63)';
                    /* console.log(o); */
                }
            }) 
        }

    }sendColor();

function resetColor(){
    let button = document.getElementById('button');
    let reset = document.querySelectorAll('.canva');
    let resetResult = document.querySelector('.result')

    button.addEventListener('click', function(event){
        for( let i=0; i<reset.length; i +=1){
            reset[i].style.backgroundColor = '#f6fff8'
            resetResult.innerText = '';
           /*  console.log(reset[i]); */
  
        }
    })
        

}resetColor();
    