const menuBurguer = document.getElementById('menuBurguer');
const baseMenu = document.querySelector('.baseMenu');

menuBurguer.addEventListener('click',()=>{
    menuBurguer.classList.toggle('ativo');
    baseMenu.classList.toggle('abrirMenu');
});

const telInput = document.getElementById('tel');

telInput.addEventListener('input', function (e) {
    let valor = e.target.value.replace(/\D/g, '');

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length <= 10) {
        // formato para números fixos ou sem nono dígito
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else {
        // formato com nono dígito (celular)
        valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
    }

    e.target.value = valor.trim();
});


const form = document.querySelector('.baseContact form');
const emailInput = document.getElementById('emailForm');

form.addEventListener('submit', function (e) {
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        e.preventDefault(); // impede o envio do formulário
        alert('Por favor, insira um e-mail válido com "@" e domínio.');
        emailInput.focus();
    }
});
