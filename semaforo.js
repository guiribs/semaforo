function semaforo() {
    var leds = document.querySelectorAll('.led');
    var intervalo = 5000; // 5 segundos
  
    function ligarLed(index) {
      for (var i = 0; i < leds.length; i++) {
        if (i === index) {
          leds[i].classList.add('ligado');
        } else {
          leds[i].classList.remove('ligado');
        }
      }
    }
  
    function trocarLed() {
      ligarLed(0); // Vermelho
      setTimeout(function() {
        ligarLed(2); // Verde
        setTimeout(function() {
          ligarLed(1); // Amarelo
          setTimeout(trocarLed, intervalo);
        }, intervalo);
      }, intervalo);
    }
  
    trocarLed();
  }
  
    semaforo();
  