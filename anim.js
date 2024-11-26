// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [

  { text: "So love me like you do", time: 0.00001},
  { text: "La-la-love me like you do ", time: 20 },
  { text: "Love me like you do ", time: 19 },
  { text: "Touch me like you do", time: 25 },
  { text: "Ta ta touch me like you do", time: 30 },
  { text: "What are you waiting for?", time: 35 },
  { text: "Fading in, fading out", time: 10 },
  { text: "On the edge of paradise", time: 15 },
  { text: "Every inch of your skin is a holy grail", time: 27},
  { text: "I've got to find", time: 10 },
  { text: "Only you can set my heart", time: 15 },
  { text: "On fire, On fire", time: 12 },
  { text: "Yeah, I'll let you set the pace", time: 17 },
  { text: "Cause I'm not thinking straight", time: 18 },
  { text: "My head's spinning around", time: 15},
  { text: "I Can't see clear no more", time: 20},
  { text: "What are you waiting for?", time: 35 },
  { text: "Love me like you do ", time: 19 },
  { text: "La-la-love me like you do ", time: 20 },
  { text: "Love me like you do ", time: 17 },
  { text: "Touch me like you do", time: 18 },
  { text: "What are you waiting for?", time: 35 },
  { text: "Love me like you do ", time: 20 },
  { text: "La-la-love me like you do, Like you do!", time: 29 },
  { text: "Love me like you do ", time: 20 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);