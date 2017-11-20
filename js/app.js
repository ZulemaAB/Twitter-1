var textarea = document.getElementById('insert-text');
var boton = document.getElementById('save');
var almacenador = document.getElementById('containertweets');
var contador = document.getElementById('numbercont');
var max = 140;

boton.addEventListener('click', function(event) {
  if (textarea.value) {
    var li = document.createElement('li');
    var tweet = document.createElement('p');
    tweet.textContent = textarea.value;
    li.appendChild(tweet);
    // almacenador.appendChild(li);
    containertweets.insertBefore(li, containertweets.firstChild);
    textarea.value = '';
    contador.textContent = 140;
  }
});

textarea.addEventListener('keyup', function() {
  var letras = textarea.value.length;
  contador.textContent = max - letras;
  if (letras > 140) {
    boton.disabled = true;
    contador.style.color = 'blue';
  } else if (letras >= 130) {
    contador.style.color = 'green';
    boton.disabled = false;
  } else if (letras < 130 && letras > 120) {
    contador.style.color = 'red';
    boton.disabled = false;
  } else {
    contador.style.color = 'black';
    boton.disabled = false;
  }
});
