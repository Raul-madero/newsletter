const mensaje = document.querySelector('#message')
const botonSuscribir = document.querySelector('#suscribe')
const botonCerrarMensaje = document.querySelector('#dismiss')

botonSuscribir.addEventListener('click', () => mensaje.classList.toggle('hidden'))
botonCerrarMensaje.addEventListener('click', () => mensaje.classList.add('hidden'))

