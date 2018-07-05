function main(){
    var divs = document.getElementsByClassName('grid-elements');
    var counterClass = document.getElementsByClassName('counter');
    var counter = 0;

    function checkText(direction){
        for (var i = 0, len = divs.length; i < len; ++i) {
            if(divs[i].innerHTML.indexOf("AA") !== -1) {
                if(direction === 'down'){
                    moveDown(i);
                    checkColor(divs[i+4]);
                }else if(direction === 'up'){
                    moveUp(i);
                    checkColor(divs[i-4]);
                }else if(direction === 'right'){
                    moveRight(i);
                    checkColor(divs[i+1]);
                }else if(direction === 'left'){
                    moveLeft(i);
                    checkColor(divs[i-1]);
                }
                return;
            }
        }
    }

    function moveDown(index){  
        divs[index+4].innerText = 'AA';
        divs[index+4].classList.toggle('player-color');
        divs[index].innerText = '';
        divs[index].classList.toggle('player-color');
    }
    function moveUp(index){  
        divs[index-4].innerText = 'AA';
        divs[index-4].classList.toggle('player-color');

        divs[index].innerText = '';
        divs[index].classList.toggle('player-color');

    }
    function moveRight(index){  
        divs[index+1].innerText = 'AA';
        divs[index+1].classList.toggle('player-color');

        divs[index].innerText = '';
        divs[index].classList.toggle('player-color');

    }
    function moveLeft(index){  
        divs[index-1].innerText = 'AA';
        divs[index-1].classList.toggle('player-color');

        divs[index].innerText = '';
        divs[index].classList.toggle('player-color');

    }




    window.addEventListener("keyup", function (event) {
        if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
        }
    
        switch (event.key) {
        case "ArrowDown":
            console.log('DOWN');  
            checkText('down');
            break;
        case "ArrowUp":
            console.log('UP');
            checkText('up');
            break;
        case "ArrowLeft":
            console.log('LEFT');
            checkText('left');
            break;
        case "ArrowRight":
            console.log('RIGHT');
            checkText('right');
            break;
        case "Enter":
            console.log('ENTER');
            changeGameMode();

            break;
        case "Escape":
            console.log('ESCAPE');
            
            break;
        default:
            return; // Quit when this doesn't handle the key event.
        }
    
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    }, true);

    function changeGameMode(){
        var next = 0;
        var goodElements = 0;

        var intervalID = setInterval(function(){
            var randomNumber = Math.floor(Math.random() * 16);
            var randomNumber2 = Math.floor(Math.random() * 16);

            for (var i = 0, len = divs.length; i < len; ++i) {
                if(divs[i].innerHTML.indexOf("AA") !== 1 && divs[i].classList.contains('good-color')) {
                    next = divs[randomNumber];
                    next.classList.toggle('bad-color');
                }
                if(divs[i].innerHTML.indexOf('AA') !== 1 && !divs[i].classList.contains('bad-color')){
                    goodElements = divs[randomNumber2];
                    goodElements.classList.toggle('good-color');
                }
            }

        }, 2000);

    }

    function checkColor(element){
        console.log(element);
        if (element.classList.contains('bad-color')) {
            element.classList.toggle('bad-color');
            counter--;

        }else if(element.classList.contains('good-color')){
            element.classList.toggle('good-color');
            counter++;

        }
        counterClass[0].innerText = counter;
    }

}
window.addEventListener('load', main);