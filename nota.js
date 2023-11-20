function calcular(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = parseFloat(document.getElementById('n3').value);

    
    let media = (n1 + n2 + n3) /3;
    let resultadoElement = document.getElementById('resultado');

    

    if(media < 6){
        resultadoElement.textContent = 'A média é: ' + media+ ' você infelizmente não alcançou a nota necessaria para ser aprovado!';
    }else{
        resultadoElement.textContent = 'A média é: ' + media+ ' parabéns você foi aprovado!'
    }    
    
}