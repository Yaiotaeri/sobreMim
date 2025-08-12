const publicKey = 'inaaNxb_9NJ5qaSoe';
const serviceId = 'service_i9g2f8p';
const templateId = 'template_39gby6d';
const emailSucess = document.getElementById('emailSucess');
const emailFail = document.getElementById('emailFail');

(function(){
      emailjs.init({
        publicKey: publicKey,
      });
   })();

   const formContact = document.querySelector('.formContact');

   formContact.addEventListener('submit', (e)=>{
    e.preventDefault();

    const nomeForm = document.getElementById('nomeForm').value;
    const emailForm = document.getElementById('emailForm').value;
    const telForm = document.getElementById('telForm').value;
    const messageForm = document.getElementById('messageForm').value;
    let templateParams ={
        name: nomeForm,
        email: emailForm,
        tel: telForm,
        message: messageForm,
    }

    emailjs.send(serviceId, templateId, templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
    emailSucess.style.display = 'block';

    setInterval(()=>{
        emailSucess.style.display = 'none';
    },3000);
  
  },
  (error) => {
    console.log('FAILED...', error);
    emailFail.style.display = 'block';

     setInterval(()=>{
        emailFail.style.display = 'none';
    },3000);
  },
);
   });

const goContact = document.getElementById('goContact');
const wtzpIcon = document.querySelector('.wtzpIcon');
const instaIcon = document.querySelector('.instaIcon');
const linkIcon = document.querySelector('.linkIcon');

const wtspGo = 'https://api.whatsapp.com/send?phone=5535988874386&text=Ol%C3%A1%20vim%20pelo%20seu%20site%20%F0%9F%98%81';
const goLinkedin = 'https://br.linkedin.com/in/jo%C3%A3o-vitor-mendes-de-oliveira-595a622b2';
const goInsta = 'https://www.instagram.com/jvmendeess__/';

goContact.addEventListener('click', ()=>{
    window.open(wtspGo);
});

wtzpIcon.addEventListener('click', ()=>{
    window.open(wtspGo);
});
instaIcon.addEventListener('click', ()=>{
    window.open(goInsta);
});
linkIcon.addEventListener('click', ()=>{
    window.open(goLinkedin);
});