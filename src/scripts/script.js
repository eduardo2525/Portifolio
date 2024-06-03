// Evento das nav
document.querySelector('a[href="#about"]').addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() => {
        document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    }, 1000);
});

document.querySelector('a[href="#skills"]').addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() => {
        document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
    }, 1000);
});

document.querySelector('a[href="#project"]').addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() => {
        document.getElementById('project').scrollIntoView({behavior: 'smooth'});
    }, 1000);
});

// Evento de Sobre Mim
const aboutMe = document.querySelector(".about__me");
const links = document.querySelectorAll('.nav__list__item a')

aboutMe.addEventListener("mouseover", aparecerSombra);
aboutMe.addEventListener("mouseout", removeSombra);

function aparecerSombra() {
    let primaryTitle = document.querySelector(".primary__title");

    if(primaryTitle.style.boxShadow === '') {
        primaryTitle.style.boxShadow = '3px 4px 4px 1px';
        primaryTitle.style.transition = '.7s ease'
    }
};

function removeSombra() {
    let primaryTitle = document.querySelector(".primary__title");

    if(primaryTitle.style.boxShadow === '3px 4px 4px 1px') {
        primaryTitle.style.boxShadow = '';
    };
};

window.onscroll = () => {
    const sections = document.querySelectorAll('.secao');
    let top = window.scrollY;

    sections.forEach(section => {
        let offSet = section.offsetTop - 60;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offSet && top < offSet + height) {
            links.forEach(link => {
                link.classList.remove('nav__list__item--btn--active');
                let activeLink = document.querySelector('.nav__list__item a[href="#' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('nav__list__item--btn--active');
                }
            });
        }
    });
}

// tabs Sobre mim

const btns = document.querySelectorAll('.tabs__btn');
const contents = document.querySelectorAll('.content')

btns.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        btns.forEach((btn) => {
            btn.classList.remove('tabs__btn--cliked');
            
        });
        
            btn.classList.add('tabs__btn--cliked');
        
            contents.forEach((e) => {
            e.classList.remove('show')
        });

        const contentId = btn.getAttribute('content-id');
        const content = document.getElementById(contentId);
        content.classList.add('show')
    });
});



//animação dos SVG

const svg = document.querySelectorAll('.svg');

svg.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = '.5s ease';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1.0)';
        icon.style.transition = '.5s ease';
    });
})

// logica do Carousel 

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(() => {
    count++;
    if(count > 5){
        count = 1
    }

    document.getElementById("radio" + count).checked = true; //coloca o true aqui 
}, 3000)

//logica dos links do projetos

const projects = document.querySelectorAll('.project__container__my');

projects.forEach((project) => {
    const links = project.querySelectorAll('.links');
    const frontEnd = project.querySelector('.front-end');

    project.addEventListener('mouseover', () => {
        links.forEach((link) => {
            if (link.style.display === 'none' || link.style.display === '') {
                link.style.display = 'flex';
                link.style.justifyContent = 'center';
                link.style.alignItems = 'center';
            }
        });

        if (frontEnd) {
            frontEnd.style.backgroundColor = 'black';
            frontEnd.style.color = '#00FFFF';
        }
    });

    project.addEventListener('mouseout', () => {
        links.forEach((link) => {
            link.style.display = 'none';
        });

        if (frontEnd) {
            frontEnd.style.backgroundColor = '#00FFFF';
            frontEnd.style.color = 'black';
        }
    });
});