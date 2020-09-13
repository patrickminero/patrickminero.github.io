window.addEventListener('load', ()=>{
    let preload = document.getElementById('preload');
    preload.style.display = 'none';
    let body = document.querySelector('body');
    body.style.overflow = 'scroll'
})

// side nav animation
let menuBtn = document.getElementById('menu-button');
let sideNav = document.getElementById('side-nav');

function menuToggle(){
    if(sideNav.style.display === 'block'){
        gsap.to('#side-nav', {display: 'none', opacity: 0, width: '0vw', duration: 1, ease: 'power2'})
        gsap.to('#top', {rotate: -360, y: 0, backgroundColor: 'var(--primary)', duration: 1});
        gsap.to('#bottom', {rotate: 360, y: 0, backgroundColor: 'var(--primary)', duration: 1}); 
        gsap.to('#middle', {opacity: 1, duration: 1, backgroundColor: 'var(--primary)'})
        // gsap.to('#menu-button', {y: 6})
        gsap.to('body', {overflow: 'initial', duration: 1})
    }else{
        gsap.to('#side-nav', {display: 'block', opacity: 1, width: '85vw', duration: 1, ease: 'power2'})
        gsap.to('#middle', {opacity: 0, backgroundColor: '#fff', duration: 1});    
        gsap.to('#top', {rotate: 405, y: 16, backgroundColor: '#fff', duration: 1});    
        gsap.to('#bottom', {rotate: -405, y: -14, backgroundColor: '#fff', duration: 1});    
        // gsap.to('#menu-button', {y: -6})
        gsap.to('body', {overflow: 'hidden', duration: 1})
        
    }
}
menuBtn.addEventListener('click', menuToggle);
sideNav.addEventListener('click', menuToggle);

//image parallax

gsap.to('#parallax', {
    scrollTrigger: {
        trigger: '#trigger',
        toggleActions: 'restart pause reverse pause',
        scrub: true,
        start: 'center top', 
        end: 'bottom bottom',
        endTrigger: "#languages",
        duration: 1,
    },
    backgroundPosition: '0% 0%',
})

//sticky menu button animation
ScrollTrigger.create({
    trigger: '#menu-button',
    start: 'top bottom',
    endTrigger: '#mail',
    end:'=+1200',
    toggleActions: 'restart pause reverse pause',
    scrub: true,
    onUpdate: self => direction(self.direction),
})
function direction(element){
    if(element == 1){
        gsap.to('#menu-button', { y: '100%', duration: .5})
    }else{
        gsap.to('#menu-button', { y: 0, duration: .5})
    }
}

gsap.to('#menu-button', {
    scrollTrigger: {
        trigger: '#about',
        toggleActions: 'restart pause reverse pause',
        scrub: true,
        start: '180% bottom', 
        end: '170%',
    },
    y: 0, duration: .5,
})

ScrollTrigger.create({
    trigger: '#about',
    start: 'top bottom',
    endTrigger: '#mail',
    end:'=+1200',
    toggleActions: 'restart pause reverse pause',
    scrub: true,
    onUpdate: self => direction(self.direction),
})
function direction(element){
    if(element == 1){
        gsap.to('#top-nav', { y: '-100%', duration: .5, delay: .5})
    }else{
        gsap.to('#top-nav', { y: '0%', duration: .5, delay: .5})
    }
}

// name color animation
function scrolling(element){
    if(element.matches){
        window.addEventListener('mousemove', mousemove);
    }else if(!element.media === false){
        window.addEventListener('scroll', ()=>{
            let scrollY = window.pageYOffset;
            gsap.to('#border h1', {color: `rgb(${(255 - scrollY * 2)}, ${255 - (scrollY * 0.8)}, ${255 - (scrollY * 0.4)})`, duration: 1})
        })
        
    }
}

function mousemove(event){
    let x = event.pageX;
    let y = event.pageY;
    gsap.to('#border h1', {color: `rgb(${x * .25}, ${y * .25}, ${y * .1})`, duration: 1})
}

let viewportsize = window.matchMedia('(min-width: 1024px)')
window.addEventListener('scroll', scrolling(viewportsize))



gsap.to(['#border h1', '#border h2'], {
    scrollTrigger:{
        trigger: '#about',
        toggleActions: 'restart pause reverse pause',
        scrub: true,
        start: 'top bottom',
        endTrigger: '#trigger',
    },
    y: 300,
    duration: 1,
})

//profile pic animation
let moveLeft = gsap.timeline({
    scrollTrigger:{
        trigger: '#about',
        scrub: true,
        start:'top center',
        end:'+=300',
    }
})

// projects card animations

let cards = gsap.timeline({
    scrollTrigger:{
        trigger: '#projects',
        // scrub: true,
        start:'bottom top',
    }
})


let viewport = window.matchMedia('(min-width: 300px)')
function smallDevice(x){
    if(x.matches){        
        cards.to('#project1', {
            width: '95vw', 
            height: 300,
            opacity: 1,
            duration: .75,
        })
        
        cards.to('#project2', {
            width: '95vw', 
            height: 300,
            opacity: 1,
            duration: .75,
        })
        
        cards.to('#project3', {
            width: '95vw', 
            height: 300,
            opacity: 1,
            duration: 1,
        })
        
        cards.to('#project4', {
            width: '95vw', 
            height: 300,
            opacity: 1,
            duration: 1,
        })
    //click animations for card descriptions
    function reveal1(){
        if(document.getElementById('description1').style.opacity == 1){
            gsap.to('#project1', {height: 300})
            gsap.to('#description1', {opacity: 0, duration: .5, pointerEvents: 'none'})        
        }else{
            gsap.to('#project1', {height: 'auto'})
            gsap.to('#description1', {opacity: 1, duration: .5})
        }
    }
    document.getElementById('project1').addEventListener('click', reveal1);


    function reveal2(){
        if(document.getElementById('description2').style.opacity == 1){
            gsap.to('#project2', {height: 300})
            gsap.to('#description2', {opacity: 0, duration: .5, pointerEvents: 'none'})        
        }else{
            gsap.to('#project2', {height: 'auto'})
            gsap.to('#description2', {opacity: 1, duration: .5})
        }
    }
    document.getElementById('project2').addEventListener('click', reveal2);


    function reveal3(){
        if(document.getElementById('description3').style.opacity == 1){
            gsap.to('#project3', {height: 300})
            gsap.to('#description3', {opacity: 0, duration: .5, pointerEvents: 'none'})        
        }else{
            gsap.to('#project3', {height: 'auto'})
            gsap.to('#description3', {opacity: 1, duration: .5})
        }
    }
    document.getElementById('project3').addEventListener('click', reveal3);


    function reveal4(){
        if(document.getElementById('description4').style.opacity == 1){
            gsap.to('#project4', {height: 300})
            gsap.to('#description4', {opacity: 0, duration: .5, pointerEvents: 'none'})        
        }else{
            gsap.to('#project4', {height: 'auto'})
            gsap.to('#description4', {opacity: 1, duration: .5,})
        }
    }
    document.getElementById('project4').addEventListener('click', reveal4);
}
}
smallDevice(viewport);


// adjust animations to medium devices
function mediumDevice(x){
    if(x.matches){
        cards.to('#project1', {
            width: '95vw', 
            height: 300,
            opacity: 1,
            duration: .75,
        })
        
        cards.to('#project2', {
            width: '95vw', 
            height: 300,
            opacity: 1,
            duration: .75,
        })
        
        cards.to('#project3', {
            width: '95vw', 
            height: 300,
            opacity: 1,
            duration: 1,
        })
        
        cards.to('#project4', {
            width: '95vw', 
            height: 300,
            opacity: 1,
            duration: 1,
        })

        function reveal1(){
            if(document.getElementById('description1').style.opacity == 1){
                gsap.to('#project1', {height: 400})
                gsap.to('#description1', {opacity: 0, duration: .5, pointerEvents: 'none'})        
            }else{
                gsap.to('#project1', {height: 'auto'})
                gsap.to('#description1', {opacity: 1, duration: .5})
            }
        }
        document.getElementById('project1').addEventListener('click', reveal1);
    
    
        function reveal2(){
            if(document.getElementById('description2').style.opacity == 1){
                gsap.to('#project2', {height: 400})
                gsap.to('#description2', {opacity: 0, duration: .5, pointerEvents: 'none'})        
            }else{
                gsap.to('#project2', {height: 'auto'})
                gsap.to('#description2', {opacity: 1, duration: .5})
            }
        }
        document.getElementById('project2').addEventListener('click', reveal2);
    
    
        function reveal3(){
            if(document.getElementById('description3').style.opacity == 1){
                gsap.to('#project3', {height: 400})
                gsap.to('#description3', {opacity: 0, duration: .5, pointerEvents: 'none'})        
            }else{
                gsap.to('#project3', {height: 'auto'})
                gsap.to('#description3', {opacity: 1, duration: .5})
            }
        }
        document.getElementById('project3').addEventListener('click', reveal3);
    
    
        function reveal4(){
            if(document.getElementById('description4').style.opacity == 1){
                gsap.to('#project4', {height: 400})
                gsap.to('#description4', {opacity: 0, duration: .5, pointerEvents: 'none'})        
            }else{
                gsap.to('#project4', {height: 'auto'})
                gsap.to('#description4', {opacity: 1, duration: .5,})
            }
        }
        document.getElementById('project4').addEventListener('click', reveal4);   
}}
let viewportmed = window.matchMedia('(min-width: 600px)')
mediumDevice(viewportmed);

// adjust animations to large devices

function largeDevice(x){
    if(x.matches){
        cards.clear();
    
        gsap.to('#project1', {
            scrollTrigger: {
                trigger: '#languages',
                scrub: true,
                start: 'top top',
                end: '+=300',
                toggleActions: 'restart pause reverse pause',
            }, 
            x: '100%',
            duration: 1,
            ease: 'power1',
        })

        gsap.from('#description-large1', {
            scrollTrigger: {
                trigger: '#languages',
                scrub: true,
                start: 'top top',
                end: '+=300',
                toggleActions: 'restart pause reverse pause',
            },
            opacity: 0,
            duration: 1.5,
            ease: 'power1',
        })

        gsap.to('#project2', {
            scrollTrigger: {
                trigger: '#project1',
                scrub: true,
                start: 'bottom top',
                end: '+=300',
                toggleActions: 'restart pause reverse pause',
            }, 
            x: '0%',
            duration: 1,
            ease: 'power1',
        })

        gsap.from('#description-large2', {
            scrollTrigger: {
                trigger: '#project1',
                scrub: true,
                start: 'bottom top',
                end: '+=300',
                toggleActions: 'restart pause reverse pause',
            }, 
            opacity: 0,
            duration: 1.5,
            ease: 'power1',
        })

        gsap.to('#project3', {
            scrollTrigger: {
                trigger: '#project2',
                scrub: true,
                start: 'bottom top',
                end: '+=200',
                toggleActions: 'restart pause reverse pause',
            }, 
            x: '100%',
            duration: 1,
            ease: 'power1',
        })

        gsap.from('#description-large3', {
            scrollTrigger: {
                trigger: '#project2',
                scrub: true,
                start: 'bottom top',
                end: '+=200',
                toggleActions: 'restart pause reverse pause',
            }, 
            opacity: 0,
            duration: 1.5,
            ease: 'power1',
        })

        gsap.to('#project4', {
            scrollTrigger: {
                trigger: '#project3',
                scrub: true,
                start: 'bottom top',
                end: '+=200',
                toggleActions: 'restart pause reverse pause',
            }, 
            x: '0%',
            duration: 1,
            ease: 'power1',
        })

        gsap.from('#description-large4', {
            scrollTrigger: {
                trigger: '#project3',
                scrub: true,
                start: 'bottom top',
                end: '+=200',
                toggleActions: 'restart pause reverse pause',
            }, 
            opacity: 0,
            duration: 1,
            ease: 'power1',
        })
}}
let viewportLarge = window.matchMedia('(min-width: 750px)')
largeDevice(viewportLarge);


function XtraLargeDevice(x){
    if(x.matches){

    }
}

let viewportXtraLarge = window.matchMedia('(min-width: 1024px)');
XtraLargeDevice(viewportXtraLarge);

if(viewportXtraLarge.matches){
    let caption = document.getElementById('caption');
    caption.innerHTML = '<span>Photo by <a href="https://unsplash.com/@corneschi?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Daniel Corneschi</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>'
    moveLeft.to('#profile-pic', {
        width: 250, 
        height: 250,
        duration: 1,
    })
    
    moveLeft.to('#profile-pic', {
        float: 'right',
        marginRight: '15vw',
        borderRadius: 0, 
        duration: 1,
    })    

}else{
    moveLeft.to('#profile-pic', {
        width: 150, 
        height: 150,
        duration: 1,
    })
    
    moveLeft.to('#profile-pic', {
        float: 'right',
        marginRight: 4,
        borderRadius: 0, 
        duration: 1,
    })    
}