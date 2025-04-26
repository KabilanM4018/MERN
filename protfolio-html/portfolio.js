//portfolio//

//background//
document.body.style.backgroundImage='linear-gradient(135deg, #191919 0%,rgb(34, 226, 229) 110%)';
document.body.style.backgroundRepeat = 'no-repeat';


//header//
const header = document.createElement('header');
document.body.appendChild(header);
header.className = 'header';
header.style.padding='15px';
header.style.display='flex';
header.style.margin='-8px';
header.style.backgroundColor='black';
header.style.boxShadow='0px 10px 44px 17px';


const h1 = document.createElement('h1');
header.appendChild(h1);
h1.textContent = 'Portfolio';
h1.style.color='white';
h1.style.fontSize='30px';
h1.style.fontFamily='cursive';
h1.style.margin='0px';
h1.style.padding='0px';
h1.style.marginLeft='20px';
h1.style.marginRight='20px';
h1.style.marginTop='10px';
h1.style.marginBottom='10px';
h1.style.textAlign='center';
h1.style.fontWeight='bold';
h1.style.fontStyle='italic';

const ul = document.createElement('ul');
header.appendChild(ul);
ul.style.padding='0px';
ul.style.margin='0px';
ul.style.display='flex';
ul.style.flexDirection='row';
ul.style.alignItems='center';
ul.style.marginTop='10px';
ul.style.marginBottom='10px';
ul.style.marginLeft='20px';
ul.style.marginRight='20px';
ul.style.fontSize='20px';
ul.style.fontFamily='cursive';
ul.style.fontWeight='bold';
ul.style.color='white';
ul.style.fontStyle='italic';

const li1 = document.createElement('li');
ul.appendChild(li1);
li1.className = 'li1';
li1.style.margin='0px';
li1.style.padding='0px';
li1.style.listStyle='none';
li1.style.fontSize='20px';
li1.style.fontFamily='cursive';
li1.style.fontWeight='bold';
li1.style.color='white';
li1.textContent = 'Home';

const li2 = document.createElement('li');
ul.appendChild(li2);
li2.className = 'li2';
li2.style.margin='0px';
li2.style.padding='0px';
li2.style.listStyle='none';
li2.style.fontSize='20px';
li2.style.fontFamily='cursive';
li2.style.fontWeight='bold';
li2.style.color='white';
li2.style.marginLeft='20px';
li2.textContent = 'About';

const li3 = document.createElement('li');
ul.appendChild(li3);
li3.className = 'li3';
li3.style.margin='0px';
li3.style.padding='0px';
li3.style.listStyle='none';
li3.style.fontSize='20px';
li3.style.fontFamily='cursive';
li3.style.fontWeight='bold';
li3.style.color='white';
li3.style.marginLeft='20px';
li3.textContent = 'Skill';

const li4 = document.createElement('li');
ul.appendChild(li4);
li4.className = 'li4';
li4.style.margin='0px';
li4.style.marginLeft='20px';
li4.style.padding='0px';
li4.style.listStyle='none';
li4.style.fontSize='20px';
li4.style.fontFamily='cursive';
li4.style.fontWeight='bold';
li4.style.color='white';
li4.textContent = 'Portfolio';

const li5 = document.createElement('li');
ul.appendChild(li5);
li5.className = 'li5';
li5.style.margin='0';
li5.style.marginLeft='20px';
li5.style.padding='0px';
li5.style.listStyle='none';
li5.style.fontSize='20px';
li5.style.fontFamily='cursive';
li5.style.fontWeight='bold';
li5.style.color='white';
li5.textContent = 'Contact';

//section//
const section = document.createElement('div');
document.body.appendChild(section);
section.style.display='flex';
section.style.flexDirection='column';
section.style.alignItems='center';
section.style.justifyContent='center';
section.style.width='50vw';
section.style.height='85vh';
section.style.border='2px solid rgb(8, 218, 218)';
section.style.margin='45px 18px';
section.style.padding='0px';
section.style.backgroundColor='black';
section.style.borderRadius='10px';
section.style.boxShadow='0 0 20px rgb(8, 218, 218)';


const section1 = document.createElement('h2');
section.appendChild(section1);
section1.className='section1';
section1.style.margin='40px 45px';
section1.style.fontSize='30px';
section1.style.fontFamily='cursive';
section1.style.fontWeight='bold';
section1.textContent = 'Hello,It`s me!';
section1.style.color='white';
section1.style.padding='0px';

const section2 = document.createElement('h1');
section.appendChild(section2);
section2.className='section2';
section2.style.margin='40px 45px';
section2.style.padding='0px';
section2.style.fontSize='20px';
section2.style.fontFamily='cursive';
section2.style.fontWeight='bold';
section2.style.color='white';
section2.textContent = 'Kabilan M'
section.style.display='inline-block';
section2.style.textAlign='left';


const section3 = document.createElement('h3');
section.appendChild(section3);
section3.className='section3';
section3.style.margin='40px 45px';
section3.style.fontSize='20px';
section3.style.fontFamily='cursive';
section3.style.fontWeight='bold';
section3.textContent = 'I am a';
section3.style.color='white';
section3.style.textAlign='left';


const sec=document.createElement('span');
section3.appendChild(sec);
sec.className='sec';
sec.style.color='cyan';
sec.style.fontSize='20px';
sec.style.marginLeft='10px';
sec.style.fontFamily='cursive';
sec.textContent='Front-End Developer';
sec.style.textAlign='left';

const para=document.createElement('p');
section3.appendChild(para);
para.className='para';
para.style.margin='40px 45px';
para.style.fontSize='20px';
para.style.fontFamily='cursive';
para.style.fontWeight='bold';
para.style.overflow='hidden';
para.textContent = 'I`m a front-end developer, I have experience in React.js, HTML, CSS, and JavaScript. I have a strong knowledge of React.js and its components, as well as its lifecycle methods. I have also experience with HTML and CSS, and I am familiar with the latest web design trends and best practices. I am also familiar with JavaScript and its various libraries and frameworks, including React.js and jQuery.';

//image//
const img=document.createElement('img');
section.appendChild(img);
img.className='img';
// img.style.display='inline-block';
img.style.height='625px';
img.style.borderRadius='100%';
img.style.marginLeft='825px';
img.style.marginTop='-610px';
img.src='./photo.png';
img.alt='Kabilan M';
img.style.border='2px solid rgb(8, 218, 218)';
img.style.backgroundColor='black';
img.style.borderRadius='10px';
img.style.boxShadow='0 0 20px rgb(8, 218, 218)';


//button//
const button=document.createElement('button');
section3.appendChild(button);
button.style.display='inline-block';
button.style.borderRadius='10px';
button.style.backgroundColor='rgb(8, 218, 218)';
button.style.color='white';
button.style.border='none';
button.style.marginLeft='155px';
button.style.width='150px';
button.style.height='50px';
button.textContent='Download CV';
button.style.fontSize='20px';
button.style.fontFamily='cursive';
button.style.boxShadow='0 0 20px rgb(8, 218, 218)';

