document.getElementById('output').style.visibility = 'hidden';  //  Ocultate the GRAMS

document.getElementById('kgInput').addEventListener('input', function (event) {
    document.getElementById('output').style.visibility = 'visible';

    let kgs = event.target.value;
    document.getElementById('gramsOutput').innerHTML = (kgs * 1000).toFixed(2);
    document.getElementById('pOutput').innerHTML = (kgs * 2.2046).toFixed(2);
    document.getElementById('osOutput').innerHTML = (kgs * 35.274).toFixed(2);
    
});