window.scrollTo(0,0);

console.log("JishanX Loaded");

const cursor = document.createElement('div');

cursor.className = 'cursor';

document.body.appendChild(cursor);

document.addEventListener('mousemove',(e)=>{

cursor.style.left = e.clientX + 'px';
cursor.style.top = e.clientY + 'px';

});

const gradients = document.querySelectorAll('.gradient');

window.addEventListener('scroll',()=>{

const scrollY = window.scrollY;

gradients.forEach((gradient,index)=>{

const speed = (index + 1) * 0.05;

gradient.style.transform =
`translateY(${scrollY * speed}px)`;

});

});

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}else{

entry.target.classList.remove('show');

}

});

},{
threshold:0.15
});

const hiddenElements =
document.querySelectorAll('.hidden');

if(hiddenElements.length > 0){

hiddenElements.forEach((el)=>{

observer.observe(el);

});

}

const cards = document.querySelectorAll(
'.project-card,.card,.contact-links a'
);

cards.forEach((card)=>{

card.addEventListener('mousemove',(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 20;
const rotateY = (centerX - x) / 20;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)`;

});

card.addEventListener('mouseleave',()=>{

card.style.transform =
'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';

});

});

window.addEventListener('load',()=>{

document.body.style.opacity = '1';

});

window.onbeforeunload = ()=>{

window.scrollTo(0,0);

};