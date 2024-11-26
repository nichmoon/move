// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "You're the light", time: 15 },
  { text: "you're the night", time: 18 },
  { text: "You're the colour of my blood", time: 27 },
  { text: "You're the cure,you're the pain", time: 32 },
  { text: "You're the only thing I wanna touch", time: 33 },
  { text: "Never knew that it could mean", time: 41 },
  { text: "So much, so much", time: 47 },
  { text: "You're the fear, I don't care", time: 54 },
  { text: "Cause I've never been so high", time: 59 },
  { text: "Follow me to the dark", time: 67 },
  { text: "Let me take you past our satellites", time: 72 },
  { text: "You can see the world you brought", time: 78 },
  { text: "To life, to life", time: 83 },
  { text: "So love me like you do ", time: 91 },
  { text: "La-la-love me like you do ", time: 97 },
  { text: "Love me like you do ", time: 104 },
  { text: "Touch me like you do", time: 108 },
  { text: "Ta ta touch me like you do", time: 144 },
  { text: "What are you waiting for?", time: 148 },
  { text: "Fading in, fading out", time: 153 },
  { text: "On the edge of paradise", time: 158 },
  { text: "Every inch of your skin is a holy grail", time: 164 },
  { text: "I've got to find", time: 169 },
  { text: "Only you can set my heart", time: 176 },
  { text: "On fire, On fire", time: 183 },
  { text: "Yeah, I'll let you set the pace", time: 188 },
  { text: "Cause I'm not thinking straight", time: 140 },
  { text: "My head's spinning around", time: 110},
  { text: "I Can't see clear no more", time: 190},
  
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