// Smooth scroll + active nav
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  });
});

// Download CV (print to PDF)
document.getElementById('downloadBtn').addEventListener('click', ()=>{
  document.body.classList.add('print-ready');
  setTimeout(()=> {
    window.print();
    setTimeout(()=> document.body.classList.remove('print-ready'), 500);
  }, 250); 
});

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Saat menu diklik, otomatis tutup sidebar
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  });
});

