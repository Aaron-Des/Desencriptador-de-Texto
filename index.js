function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let trapo = document.getElementById("trapo");
  
    let textoCifrado = texto
      .replace(/e/gi, "exe")
      .replace(/i/gi, "ppdown")
      .replace(/a/gi, "kana")
      .replace(/o/gi, "bulu")
      .replace(/u/gi, "orobo");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      trapo.src = "./imagenes/Encriptado.png";
    } else {
      trapo.src = "./imagenes/muneco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algun texto");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let trapo = document.getElementById("trapo");
  
    let textoCifrado = texto
      .replace(/exe/gi, "e")
      .replace(/ppdown/gi, "i")
      .replace(/kana/gi, "a")
      .replace(/bulu/gi, "o")
      .replace(/orobo/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        trapo.src = "./imagenes/Desencriptado.png";
      } else {
        trapo.src = "./imagenes/muneco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");
      }
  }