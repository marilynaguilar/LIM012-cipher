//prueba 
const cipher = {
  
  encode: (valueNum,valueText) => {

    //creando un ciclo for que recorra
    for (let i = 0; i < valueText.length; i++) 
    {
    let asciiPositionText = valueText.charCodeAt(i);
    if (asciiPositionText >= 65 && asciiPositionText <= 90) 
    {
      let formulaCipher = (asciiPositionText-65+parseInt(valueNum))%26+65;
      boxResult.value+= String.fromCharCode(formulaCipher); 
    } else {
      boxResult.value += valueText[i];
    }
    }
    return boxResult.value 
  },

  decode:(valueNum,valueText) =>
  {
    
    for (let i = 0; i < valueText.length; i++)
    {
      let asciiPositionText = valueText.charCodeAt(i);
      if (asciiPositionText >= 65 && asciiPositionText <= 90)
    {
      let formulaCipher = (asciiPositionText-90-parseInt(valueNum))%26+90;
      boxResult.value+= String.fromCharCode(formulaCipher);
    } else {
      boxResult.value += valueText[i];
    }
    }
    return boxResult.value
  },

};

export default cipher;
