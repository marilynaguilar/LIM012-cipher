
const cipher = {
  
  
  encode: (valueNum,valueText) => {
    let resultEncode = '';

    
    for (let i = 0; i < valueText.length; i++) //creando un ciclo for que recorra. 0 xque es la posicion inicial 
    {
    let asciiPositionText = valueText.charCodeAt(i); //obteniendo la posicion ascii de la letra 
    if (asciiPositionText >= 65 && asciiPositionText <= 90)// condicion
    {
      let formulaCipher = (asciiPositionText-65+parseInt(valueNum))%26+65;//aplicando la fórmula cipher
      resultEncode+= String.fromCharCode(formulaCipher); 
    } else {
      resultEncode += valueText[i];
    }
    }
    return resultEncode 
  },

  decode: (valueNum,valueText) =>
  {
    let resultDecode = '';
    for (let i = 0; i < valueText.length; i++)
    {
      let asciiPositionText = valueText.charCodeAt(i);
      if (asciiPositionText >= 65 && asciiPositionText <= 90)
    {
      let formulaCipher = (asciiPositionText-90-parseInt(valueNum))%26+90;
      resultDecode+= String.fromCharCode(formulaCipher);
    } else {
      resultDecode += valueText[i];
    }
    }
    return resultDecode
  },

};

export default cipher;
