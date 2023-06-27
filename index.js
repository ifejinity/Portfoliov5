// type effect
var wordsToType = document.querySelector("#hero-text span[words]").getAttribute("words").split(','), 
            typer =  document.querySelector("#hero-text span[words]"), 
            typingSpeed = (parseInt(typer.getAttribute('typing-speed')) || 70), 
            typingDelay = (parseInt(typer.getAttribute('typing-delay')) || 700);
    
var currentWordIndex = 0, currentCharacterIndex = 0; 

function type(){

    var wordToType = wordsToType[currentWordIndex%wordsToType.length];

    if(currentCharacterIndex < wordToType.length){
        typer.innerHTML += wordToType[currentCharacterIndex++];
        setTimeout(type, typingSpeed);
    }else{

        setTimeout(erase, typingDelay);
    }

}
function erase(){
    var wordToType = wordsToType[currentWordIndex%wordsToType.length]; 
    if(currentCharacterIndex >0){
        typer.innerHTML = wordToType.substr(0, --currentCharacterIndex -1);
        setTimeout(erase, typingSpeed);
    }else{

        currentWordIndex++; 
        setTimeout(type, typingDelay);
    }

}

window.onload = function(){
    type(); 
}

// magnetic button
const titleContainers = document.querySelectorAll('.title-container')

titleContainers.forEach(titleContainer => {
  const title = titleContainer.querySelector('.title');
  const activeAfter = window.getComputedStyle(titleContainer,':before');

  titleContainer.addEventListener('mousemove', e => {
    const midWidth = titleContainer.clientWidth / 2
    const midHeight = titleContainer.clientHeight / 2

    title.style.transform = `translate(${(e.offsetX - midHeight) / 2.7}px, ${(e.offsetY - midWidth) / 2.7}px)`
  })
  
  titleContainer.addEventListener('mouseenter', e => {
    titleContainer.classList.add('active')
  })

  titleContainer.addEventListener('mouseleave', e => {
    title.style.transform = `translate(0, 0)`
    titleContainer.classList.remove('active')
  })
})

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

$(window).on('scroll', function() {
    navigation();
});

$(window).on('load', function() {
    navigation();
});

function navigation(){
    if (isInViewport($('#hero_sec')[0])) {
        $(".title-container").eq(0).addClass('bg-blue-500 text-white');
        for(let i = 0; i <= 5; i++){
            if(i != 0){
                $(".title-container").eq(`${i}`).removeClass('bg-blue-500 text-white');
            }
        }
    }

    if (isInViewport($('#about_sec')[0])) {
        $(".title-container").eq(1).addClass('bg-blue-500 text-white');
        for(let i = 0; i <= 5; i++){
            if(i != 1){
                $(".title-container").eq(`${i}`).removeClass('bg-blue-500 text-white');
            }
        }
    }

    if (isInViewport($('#skills_sec')[0])) {
        $(".title-container").eq(2).addClass('bg-blue-500 text-white');
        for(let i = 0; i <= 5; i++){
            if(i != 2){
                $(".title-container").eq(`${i}`).removeClass('bg-blue-500 text-white');
            }
        }
    }

    if (isInViewport($('#edu_sec')[0])) {
        $(".title-container").eq(3).addClass('bg-blue-500 text-white');
        for(let i = 0; i <= 5; i++){
            if(i != 3){
                $(".title-container").eq(`${i}`).removeClass('bg-blue-500 text-white');
            }
        }
    }

    if (isInViewport($('#works_sec')[0])) {
        $(".title-container").eq(4).addClass('bg-blue-500 text-white');
        for(let i = 0; i <= 5; i++){
            if(i != 4){
                $(".title-container").eq(`${i}`).removeClass('bg-blue-500 text-white');
            }
        }
    }
}

// projects
const itemProjects = document.querySelectorAll("#project_item");
const itemDescription = document.querySelectorAll("#project_description");
const itemImage = document.querySelectorAll("#project_image");

let child = $("#project_parent")
let childCount =  child.children().length;

for (let item of itemProjects){
    item.addEventListener('mouseenter', function () {
        for(let i = 0; i <= childCount; i++){
            if(this == itemProjects[i]){
                itemDescription[i].classList.replace('hidden', 'flex');
                itemImage[i].classList.add('scale-[1.1]');
            }
        }
    })

    item.addEventListener('mouseleave', function () {
        for(let i = 0; i <= childCount; i++){
            if(this == itemProjects[i]){
                itemDescription[i].classList.replace('flex',"hidden");
                itemImage[i].classList.remove('scale-[1.1]');
            }
        }
    })
}