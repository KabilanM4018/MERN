// Set background
document.body.style.background = 'linear-gradient(135deg, #191919 0%, rgb(34,226,229) 110%)';

// Create header
const header = Object.assign(document.body.appendChild(document.createElement('header')), {
  className: 'header',
  style: 'padding:15px; display:flex; margin:-8px; background:black;'
});

// Create h1
const h1 = header.appendChild(document.createElement('h1'));
Object.assign(h1, {
  textContent: 'Portfolio',
  style: 'color:white; font: bold italic 30px cursive; margin:10px 20px; text-align:center; padding:0;'
});

// Create nav list
const ul = header.appendChild(document.createElement('ul'));
Object.assign(ul.style, {
  display: 'flex', flexDirection: 'row', alignItems: 'center',
  margin: '10px 20px', padding: '0', font: 'bold italic 20px cursive', color: 'white'
});
['Home', 'About', 'Skill', 'Portfolio', 'Contact'].forEach((text, i) => {
  const li = ul.appendChild(document.createElement('li'));
  Object.assign(li, {
    textContent: text,
    className: `li${i + 1}`,
    style: `margin:0 0 0 ${i ? 20 : 0}px; padding:0; list-style:none; font: bold 20px cursive; color:white;`
  });
});

// Section
const section = Object.assign(document.body.appendChild(document.createElement('div')), {
  className: 'section',
  style: `display:flex; flex-direction:column; align-items:center; justify-content:center;
          width:50vw; height:90vh; margin:45px 18px; padding:0; border:2px solid rgb(8,218,218);
          background:black; border-radius:10px; box-shadow:0 0 20px rgb(8,218,218);`
});

const texts = [
  { tag: 'h2', class: 'section1', text: "Hello, It's me!", size: 30 },
  { tag: 'h1', class: 'section2', text: "Kabilan M", size: 20 },
  { tag: 'h3', class: 'section3', text: "I am a ", size: 20 }
];

texts.forEach(({ tag, class: cls, text, size }) => {
  const el = section.appendChild(document.createElement(tag));
  Object.assign(el, {
    className: cls,
    textContent: text,
    style: `margin:40px 45px; font:bold ${size}px cursive; color:white; padding:0; text-align:left;`
  });
  if (cls === 'section3') {
    const span = el.appendChild(document.createElement('span'));
    Object.assign(span, {
      className: 'sec',
      textContent: 'Front-End Developer',
      style: 'color:cyan; font:20px cursive; margin-left:10px; text-align:left;'
    });
  }
});

// Paragraph
const para = section.appendChild(document.createElement('p'));
Object.assign(para, {
  className: 'para',
  textContent: "I'm a front-end developer, I have experience in React.js, HTML, CSS, and JavaScript. I have a strong knowledge of React.js and its components, as well as its lifecycle methods. I have also experience with HTML and CSS, and I am familiar with the latest web design trends and best practices. I am also familiar with JavaScript and its various libraries and frameworks, including React.js and jQuery.",
  style: 'margin:40px 45px; font:bold 20px cursive; color:white; text-align:left;'
});
// Image
const img = section.appendChild(document.createElement('img'));
Object.assign(img, {
  className: 'img',
  src: 'https://i.ibb.co/2Cj5p7D/Kabilan-M.png',
  style: 'margin:40px 45px; width:150px; height:150px; border-radius:50%;'
});
// Button
const button = section.appendChild(document.createElement('button'));
Object.assign(button, {
  className: 'button',
  textContent: 'Click Me',
  style: 'margin:40px 45px; font:bold 20px cursive; color:white;'
});
