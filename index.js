$(document).ready(function(){
    // education
    const worksParent = document.querySelector("#works_parent");
    const worksItem = {
        acacia: {
            companyName: ['Acaciasoft'],
            year: ['2023 - present'],
            job: [
                "Software Development",
                "Cloud Engineering",
                "API Integration"
            ]
        },
        technopos: {
            companyName: ['TechnoPOS Computer Store(Internship 2023)'],
            year: ['2023'],
            job: [
                "Develop and Design a Website for affordaPOS",
                "Hardware Cleaning & Checking",
                "Point of Sale System(Quality Assurance)"
            ]
        },
        bslts: {
            companyName: ['Barbie Sweet Little Things Shop(Part time)'],
            year: ['2021'],
            job: [
                "Barbie Sweet Little Things Shop(May 2021 - December 2021)",
                "Sticker Layouting & Cutting using Sign Master",
                "Parcel Packing",
                "Order Management(Shopee & Lazada Seller Account)"
            ]
        },
        casap: {
            companyName: ['College of Arts and Sciences of Asia and the Pacific(Internship 2019)'],
            year: ['2019'],
            job: [
                "Encoding of Students Grade in Form 137",
                "Poster Making",
                "Room Utilization System Development utilizing VB6 and Microsoft Access",
                "Sports Fest Documentation(2019)"
            ]
        }
    };

    for(let wor of Object.keys(worksItem)){
        const yearParent = document.createElement('div');
        yearParent.innerHTML = `
            <p class="text-[14px] text-blue-500 font-medium">${worksItem[wor].year}</p>
        `;
        const timeLine = document.createElement('div');
        timeLine.className = 'flex flex-col justify-center items-center';
        timeLine.innerHTML = `
            <div class="w-[10px] h-[10px] bg-blue-500 rounded-full"></div>
            <div class="w-[2px] h-full bg-blue-500 rounded-full pt-[3px]"></div>
        `;
        const awards = document.createElement('div');
        awards.className = "mb-[15px]";
        awards.setAttribute('data-aos', 'fade-left');
        awards.setAttribute('data-aos-easing', 'ease-out-cubic');
        awards.setAttribute('data-aos-duration', '1000');
        awards.innerHTML = `<p class="text-[16px] text-blue-500 font-medium">${worksItem[wor].companyName}</p>`;
        for(let job of Object.keys(worksItem[wor].job)){
            awards.innerHTML += `<p class="text-[14px] text-gray-600">${worksItem[wor].job[job]}</p>`;
        }

        worksParent.appendChild(yearParent);
        worksParent.appendChild(timeLine);
        worksParent.appendChild(awards);
    }

    // education
    const educationParent = document.querySelector("#education_parent");
    const education = {
        urs: {
            schoolname: ['University of Rizal System'],
            year: ['2019 - 2023'],
            awards: [
                "Dean's Lister(1st - 4th Year)", 
                'Cum Laude Award',
                '7th place - CCS Days Start-up Challenge 2023'
            ]
        },
        casap: {
            schoolname: ['College of Arts and Sciences of Asia and the Pacific'],
            year: ['2017 - 2019'],
            awards: [
                'Ranked 1 - (Grade 11 - Grade 12)', 
                'With Honor(S.Y. 2017 - 2018)', 
                'Most Outstanding ICT Student(Class of 2019)', 
                'With Honor(Class of 2019)'
            ]
        }
    };

    for(let edu of Object.keys(education)){
        const yearParent = document.createElement('div');
        yearParent.innerHTML = `
            <p class="text-[14px] text-blue-500 font-medium">${education[edu].year}</p>
        `;
        const timeLine = document.createElement('div');
        timeLine.className = 'flex flex-col justify-center items-center';
        timeLine.innerHTML = `
            <div class="w-[10px] h-[10px] bg-blue-500 rounded-full"></div>
            <div class="w-[2px] h-full bg-blue-500 rounded-full pt-[3px]"></div>
        `;
        const awards = document.createElement('div');
        awards.className = "mb-[15px]";
        awards.setAttribute('data-aos', 'fade-left');
        awards.setAttribute('data-aos-easing', 'ease-out-cubic');
        awards.setAttribute('data-aos-duration', '1000');
        awards.innerHTML = `<p class="text-[16px] text-blue-500 font-medium">${education[edu].schoolname}</p>`;
        for(let awardsItem of Object.keys(education[edu].awards)){
            awards.innerHTML += `<p class="text-[14px] text-gray-600">${education[edu].awards[awardsItem]}</p>`;
        }

        educationParent.appendChild(yearParent);
        educationParent.appendChild(timeLine);
        educationParent.appendChild(awards);
    }
    
    // skills
    const parentDiv = document.querySelector("#skills_parent");
    const imageSources = [
        './src/assets/skills/laravel.png',
        './src/assets/skills/vue.png',
        './src/assets/skills/inertia.png',
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
    const works = {
        image: [
            './src/assets/projects/bslts.png', 
            './src/assets/projects/affordapos.png', 
            './src/assets/projects/unichat.png', 
            './src/assets/projects/whispersec.png',
            './src/assets/projects/jumpninja.png'
        ],
        title: [
            'BARBIE SWEET LITTLE THINGS SHOP', 
            'AFFORDAPOS', 
            'UNICHAT', 
            'WHISPERSEC',
            'JUMP NINJA'
        ],
        code: [
            'https://github.com/ifejinity/e-commerce-website-for-BSLTS-Prestashop-', 
            'https://github.com/ifejinity/affordaPOS', 
            'https://github.com/ifejinity/UniversityChat', 
            'https://github.com/ifejinity/WhisperSec',
            'https://github.com/ifejinity/jump-ninja'
        ],
        view: [
            , 
            'https://ifejinity.github.io/affordaPOS/', 
            'https://universitychat.synergize.co/', 
            'https://whispersec.totalh.net/',
            'https://drive.google.com/file/d/1V6kcqIPhMP_SS_xoxJy7aumWFi5DuRAs/view?usp=drive_link'
        ]
    };

    for (let i = 0; i < works.title.length; i++){
        const div = document.createElement('div');
        div.className = 'w-full rounded-[5px] m-auto relative overflow-clip cursor-pointer';
        div.setAttribute('id', 'project_item');
        let codeBtn = viewBtn = '';
        // code button
        if(works.code[i] != null){
            codeBtn = ` <a href="${works.code[i]}" class="rounded-full border-[1px] border-white py-1 px-2 hover:bg-white hover:text-black duration-500" target="_blank">Code <i class="bi bi-github text-[16px]"></i></a>`;
        }
        // view button
        if(works.view[i] != null){
            viewBtn = `<a href="${works.view[i]}" class="rounded-full border-[1px] border-white py-1 px-2 hover:bg-white hover:text-black duration-500" target="_blank">View <i class="bi bi-link-45deg text-[16px]"></i></a>`
        }

        div.innerHTML = `
            <div class="w-full h-full bg-black/50 z-[1] absolute hidden duration-300 transition-all justify-center items-center p-5 flex-col gap-3" id="project_description">
                <p class="text-white md:text-[25px] text-[20px] font-bold">${works.title[i]}</p>
                <div class="flex gap-3 text-white text-[14px]">
                    ${codeBtn}
                    ${viewBtn}
                </div>
            </div>
            <img src="${works.image[i]}" alt="" srcset="" class="w-full h-full duration-300 transition-all" id="project_image">
        `;
        myworksParent.appendChild(div);
    }

    const sliceWorks = document.querySelectorAll("#project_item");
    console.log(sliceWorks.length)
    
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

        if (isInViewport($('#contact_sec')[0])) {
            $(".title-container").eq(5).addClass('bg-blue-500 text-white');
            for(let i = 0; i <= 5; i++){
                if(i != 5){
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
