var noOfdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i< noOfdrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",gotClicked);//yahn sirf 'function name' dena he as input [without any parenthesis] qk jb hum with parenthesis function likhengy or dengy as input to wo 'without click kry' page k reload hoty hi us function ko call krdega jo k iss case me hume nhi chahiye hence why we only give function name ALSO WE CAN JUST DEFINE THE WHOLE FUNCTION INSIDE EventListener() parenthesis
}

function gotClicked()
{
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
    buttonAnimation(buttonPressed);

   
    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event,key);
    })//higher order function
}

function makeSound(key)
{
    switch (key)
    {
        case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

        case "a":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;

        case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
        
        case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;        

        case "j":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
                
         case "k":
             var tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();
             break; 
          
         case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;  
            
        default: console.log(buttonPressed);
    }

}
function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);//timeout function executes after a delay of 100 miliseconds
}