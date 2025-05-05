document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const destino = document.getElementById('opciones').value;
    const dias = document.getElementById('dias').value;
    const conversiones = {
        'Cuzco': { moneda: 'Soles (PEN)', tasa: 319.88 },
        'Rio': { moneda: 'Reales (BRL)', tasa: 207.20 },
        'Miami': { moneda: 'Dólares (USD)', tasa: 1169 }, 
        'Barcelona': { moneda: 'Euros (EUR)', tasa: 1328 },
        'Tokio': { moneda: 'Yenes (JPY)', tasa: 8.12},
        'Roma': { moneda: 'Euros (EUR)', tasa: 1328 },
        'Estambul': { moneda: 'Liras (TRY)', tasa: 30.39 },
        'Paris': { moneda: 'Euros (EUR)', tasa: 1328 }
    };
    const moneda = conversiones[destino].moneda;
    const tasa = conversiones[destino].tasa;
    const total = 100 * dias;
    const totalEnARS = total * tasa;

if (dias < 31)
{
    document.getElementById('resultado').innerText = 
        `Necesito 100 ${moneda} por día para estar tranquilo, entonces junta ${totalEnARS} pesos argentinos.`;
}
else {
    document.getElementById('resultado').innerText = 'no se puede calcular';
}

});
