
var jugadas = prompt("¿Te gustaría jugar al cachipún? \n\nPrimero ingresa el número de la cantidad de veces que quieres jugar al cachipún");  // se le pide al usuario que ingrese el número de jugadas
alert("Y ahora para jugar al cachipún solo ingresa: piedra, papel o tijeras. ¡Comencemos!");

function cachipun() {

  var contadorU = 0;
  var contadorM = 0;
  
    for(i = 1; i <= jugadas; i++) {                                                   //se crea el ciclo para el número de jugadas, comienza en 1 y llega hasta el número que ingresa el usuario  
      var elecUsuario = prompt(`Partida N°: ${i} \nIngresa: piedra, papel o tijeras`);                   //Se le pide al usuario que ingrese una de las 3 opciones
      
      var elecMaquina = Math.floor(Math.random() * 3);   //(0,1,2)                                 //Se crean juagdas aleatorias para la máquina: 0, 1 , 2
      
      //piedra = 0;
      //tijeras = 1;
      //papel = 2;
      
      if (elecUsuario == "piedra" && (elecMaquina == 1)) {                       //Se crean las jugadas entre el usuario y la máquina
        alert( "La máquina jugó tijeras. ¡Excelente has ganado esta partida!" );
        alert("¡Ganaste un punto!");
        contadorU++;
      } 
      else if (elecUsuario == "tijeras" && (elecMaquina == 2 )) {
        alert( "La máquina jugó papel. ¡Excelente has ganado esta partida!" );
        alert("¡Ganaste un punto!");
        contadorU++;
      } 
      else if (elecUsuario == "papel" && (elecMaquina == 0 )) {
        alert( "La máquina jugó piedra. ¡Excelente has ganado esta partida!" );
        alert("¡Ganaste un punto!");
        contadorU++;
      }
      else if (elecUsuario == "papel" && (elecMaquina == 1)) {
        alert( "La máquina jugó tijeras. Lo siento has perdido esta partida =(" );
        alert("¡La máquina ganó un punto!");
        contadorM++;
      }
      else if (elecUsuario == "piedra" && (elecMaquina == 2)) {
        alert( "La máquina jugó papel. Lo siento has perdido esta partida =(" );
        alert("¡La máquina ganó un punto!");
        contadorM++;
      }
      else if (elecUsuario == "tijeras" && (elecMaquina == 0)) {
        alert( "La máquina jugó piedra. Lo siento has perdido esta partida =(" );
        alert("¡La máquina ganó un punto!");
        contadorM++;
      }
      else if (elecUsuario == "tijeras" && (elecMaquina == 1)) {
        alert( "La máquina también jugó tijeras, es un empate." );
      }
      else if (elecUsuario == "piedra" && (elecMaquina == 0)) {
        alert( "La máquina también jugó piedra, es un empate." );
      }
      else if (elecUsuario == "papel" && (elecMaquina == 2)) {
        alert( "La máquina también jugó papel, es un empate." );
      }
      else {
          alert("Error... ¡Aprende a escribir!")
      }
    } // fin del ciclo for 
    
 
    if (contadorM > contadorU) {        //comparando contadores
      alert (`Fin del juego \n\nHumano: ${contadorU} partidas ganadas \nMáquina: ${contadorM} partidas ganadas \n\nLo siento, has perdido el juego contra la máquina. Sigue participando.`) 
   }
    else if (contadorM < contadorU) {
      alert (`Fin del juego \n\nHumano: ${contadorU} partidas ganadas \nMáquina: ${contadorM} partidas ganadas \n\nLe has ganado el juego a la máquina! ¡¡Felicitaciones!!`)  
    }
    else if (contadorM == contadorU) {
      alert (`Fin del juego \n\nHumano: ${contadorU} partidas ganadas \nMáquina: ${contadorM} partidas ganadas \n\nLa máquina y tú han empatado.`)                 
    } 

} //fin de la función
cachipun(); //se ejecuta la función
