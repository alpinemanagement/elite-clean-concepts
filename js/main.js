(function(){
  const year = document.querySelectorAll('[data-year]');
  year.forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle && nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  const form=document.getElementById('quote-form');
  if(form){form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject=encodeURIComponent('Cleaning enquiry — '+data.get('spaceType'));const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')||'Not provided'}\nSpace: ${data.get('spaceType')}\nArea: ${data.get('location')||'Not provided'}\n\nMessage:\n${data.get('message')}`);const feedback=document.getElementById('form-feedback');feedback.textContent='Opening your email app with the enquiry details. Please review and send the message there.';window.location.href=`mailto:?subject=${subject}&body=${body}`;});}
})();
