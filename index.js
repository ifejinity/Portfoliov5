$(document).ready(function(){
    // skills
    const parentDiv = document.querySelector("#skills_parent");
    const imageSources = [
    './src/assets/skills/html5.png',
    './src/assets/skills/css.png',
    './src/assets/skills/js.png',
    './src/assets/skills/jquery.png',
    './src/assets/skills/php.png',
    './src/assets/skills/mysql.png',
    './src/assets/skills/tailwind.png',
    './src/assets/skills/daisyui.png',
    './src/assets/skills/figma.png',
    './src/assets/skills/ps.png',
    './src/assets/skills/ai.png',
    './src/assets/skills/canva.png'
    ];

    for (let i = 0; i < imageSources.length; i++) {
        const div = document.createElement('div');
        div.className = 'title-container min-w-[100px] min-h-[100px] hover:grayscale-0 transition-all duration-500 grayscale m-auto';
        div.setAttribute('data-aos', 'fade');
        div.setAttribute('data-aos-easing', 'ease-out-cubic');
        div.setAttribute('data-aos-duration', '1000');

        const img = document.createElement('img');
        img.src = imageSources[i];
        img.alt = '';
        img.className = 'title w-[60%]';

        div.appendChild(img);
        parentDiv.appendChild(div);
    }

    // myworks
    const myworksParent = document.querySelector("#project_parent");
    const works = [
        ['./src/assets/project_placeholder.jpg', 'BARBIE SWEET LITTLE THINGS SHOP'],
        ['./src/assets/project_placeholder.jpg', 'AFFORDAPOS'],
        ['./src/assets/project_placeholder.jpg', 'UNICHAT']
    ];

    for (let i = 0; i < works.length; i++){
        const div = document.createElement('div');
        div.className = 'w-full rounded-md m-auto relative overflow-clip cursor-pointer';
        div.setAttribute('id', 'project_item');
        
       div.innerHTML = `
        <div class="w-full h-full bg-black/50 z-[1] absolute hidden duration-500 transition-all justify-center items-center p-5 flex-col gap-3" id="project_description">
            <p class="animate__fadeInLeft animate__bounceIn text-white md:text-[25px] text-[20px] font-bold">${works[i][1]}</p>
            <div class="flex gap-3 text-white text-[14px]">
                <a href="" class="rounded-full border-[1px] border-white py-1 px-2 hover:bg-white hover:text-black duration-500">Code <i class="bi bi-github text-[16px]"></i></a>
                <a href="" class="rounded-full border-[1px] border-white py-1 px-2 hover:bg-white hover:text-black duration-500">View <i class="bi bi-link-45deg text-[16px]"></i></a>
            </div>
        </div>
        <img src="${works[i][0]}" alt="" srcset="" class="w-full h-full duration-500 transition-all" id="project_image">
       `;

       myworksParent.appendChild(div);
    }

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
});