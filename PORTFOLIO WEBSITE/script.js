let home = document.getElementById('home');
home.addEventListener('click',()=>{
   window.scrollTo({
    top:0,
    behavior:"smooth"
   })
})
let opt = document.querySelectorAll('.bottom');
opt.forEach((opt)=>{
    opt.addEventListener(('click'),()=>{
        window.scrollTo({
            top:900,
            behavior:"smooth"
        })
    })
})
let aboutOpt = document.getElementById('about');
let contactOpt = document.getElementById('contact');
let skillsOpt = document.getElementById('skills');
aboutOpt.addEventListener('click',(e)=>{
    e.target.classList.add('active');
    contactOpt.classList.remove('active')
     skillsOpt.classList.remove('active')
})
contactOpt.addEventListener('click',(e)=>{
    e.target.classList.add('active');
    aboutOpt.classList.remove('active')
     skillsOpt.classList.remove('active')
})
skillsOpt.addEventListener('click',(e)=>{
    e.target.classList.add('active');
    aboutOpt.classList.remove('active')
     contactOpt.classList.remove('active')
});
let options = document.getElementById('optionsOfNavigation');
let option = options.querySelectorAll('li')
option.forEach((option)=>{
    window.addEventListener('scroll',()=>{
        let pos = document.documentElement.scrollTop;
        if(pos<500){
            home.classList.add('activ');
            about.classList.remove('activ')  
            contact.classList.remove('activ')
            skills.classList.remove('activ')
        }else{
            home.classList.remove('activ')
        }
    })
});
let about  = document.getElementById('AboutLi');
let contact = document.getElementById('ContactLi');
let skills = document.getElementById('SkillsLi');
aboutOpt.addEventListener('click',()=>{
    about.classList.add('activ')
    contact.classList.remove('activ');
    skills.classList.remove('activ');
    let change = document.getElementById('change');
    change.innerHTML = "<p>I am Asmit Padia and I am from Chakradharpur, Jharkhand<br>I am 13Yrs old and I am coding from just 4-5months.<br>My goal is to become a full stack web developer which<br> uses Mern stack  to develop dynamic websites</p>"
});
contactOpt.addEventListener('click',()=>{
    let change = document.getElementById('change');
    change.innerHTML = "<p>My Phone Number is:6203006630 <br>";
    contact.classList.add('activ')
    skills.classList.remove('activ')
    about.classList.remove('activ')
});
skillsOpt.addEventListener('click',()=>{
    let change = document.getElementById('change');
    change.innerHTML = "<p> I've learnt HTML CSS and few JAVASCRIPT and<br> BOOTSTRAP and I'll learn React js Python Django and Sql <br>";
    skills.classList.add('activ')
    contact.classList.remove('activ')
    about.classList.remove('activ')
});
skills.addEventListener('click',()=>{
    let change = document.getElementById('change');
    change.innerHTML = "<p> I've learnt HTML CSS and few JAVASCRIPT and<br> BOOTSTRAP and I'll learn React js Python Django and Sql <br>";
    skills.classList.add('activ')
    skillsOpt.classList.add('active')
    contactOpt.classList.remove('active')
    aboutOpt.classList.remove('active')
    contact.classList.remove('activ')
    about.classList.remove('activ')
});
about.addEventListener('click',()=>{
    let change = document.getElementById('change');
    change.innerHTML = "<p>I am Asmit Padia and I am from Chakradharpur, Jharkhand<br>I am 13Yrs old and I am coding from just 4-5months.<br>My goal is to become a full stack web developer which<br> uses Mern stack  to develop dynamic websites</p>";
    skills.classList.remove('activ')
    skillsOpt.classList.remove('active')
    contactOpt.classList.remove('active')
    aboutOpt.classList.add('active')
    contact.classList.remove('activ')
    about.classList.add('activ')
})
contact.addEventListener('click',()=>{
    let change = document.getElementById('change');
    change.innerHTML = "<p>I am Asmit Padia and I am from Chakradharpur, Jharkhand<br>I am 13Yrs old and I am coding from just 4-5months.<br>My goal is to become a full stack web developer which<br> uses Mern stack  to develop dynamic websites</p>";
    skills.classList.remove('activ')
    skillsOpt.classList.remove('active')
    contactOpt.classList.add('active')
    aboutOpt.classList.remove('active')
    contact.classList.add('activ')
    about.classList.remove('activ')
})