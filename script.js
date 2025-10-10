var nome1 = document.getElementById('nome_vencedor_1');
var nome2 = document.getElementById('nome_vencedor_2');
var nome3 = document.getElementById('nome_vencedor_3');
var nome4 = document.getElementById('nome_vencedor_4');
var nome5 = document.getElementById('nome_vencedor_5');
var nome6 = document.getElementById('nome_vencedor_6');

function abrir_arte_1() {
    document.getElementById('sorteio1').style.display='flex';
    document.getElementById('sorteio2').style.display='none';
    document.getElementById('sorteio3').style.display='none';
    document.getElementById('sorteio4').style.display='none';
    document.getElementById('sorteio5').style.display='none';
    document.getElementById('sorteio6').style.display='none';
    document.getElementById('resultado_1').style.display='none';
    document.getElementById('resultado_2').style.display='none';
    document.getElementById('resultado_3').style.display='none';
    document.getElementById('resultado_4').style.display='none';
    document.getElementById('resultado_5').style.display='none';
    document.getElementById('resultado_6').style.display='none';
}

function abrir_arte_2() {
    document.getElementById('sorteio1').style.display='none';
    document.getElementById('sorteio2').style.display='flex';
    document.getElementById('sorteio3').style.display='none';
    document.getElementById('sorteio4').style.display='none';
    document.getElementById('sorteio5').style.display='none';
    document.getElementById('sorteio6').style.display='none';
    document.getElementById('resultado_1').style.display='none';
    document.getElementById('resultado_2').style.display='none';
    document.getElementById('resultado_3').style.display='none';
    document.getElementById('resultado_4').style.display='none';
    document.getElementById('resultado_5').style.display='none';
    document.getElementById('resultado_6').style.display='none';
}

function abrir_arte_3() {
    document.getElementById('sorteio1').style.display='none';
    document.getElementById('sorteio2').style.display='none';
    document.getElementById('sorteio3').style.display='flex';
    document.getElementById('sorteio4').style.display='none';
    document.getElementById('sorteio5').style.display='none';
    document.getElementById('sorteio6').style.display='none';
    document.getElementById('resultado_1').style.display='none';
    document.getElementById('resultado_2').style.display='none';
    document.getElementById('resultado_3').style.display='none';
    document.getElementById('resultado_4').style.display='none';
    document.getElementById('resultado_5').style.display='none';
    document.getElementById('resultado_6').style.display='none';
}

function abrir_arte_4() {
    document.getElementById('sorteio1').style.display='none';
    document.getElementById('sorteio2').style.display='none';
    document.getElementById('sorteio3').style.display='none';
    document.getElementById('sorteio4').style.display='flex';
    document.getElementById('sorteio5').style.display='none';
    document.getElementById('sorteio6').style.display='none';
    document.getElementById('resultado_1').style.display='none';
    document.getElementById('resultado_2').style.display='none';
    document.getElementById('resultado_3').style.display='none';
    document.getElementById('resultado_4').style.display='none';
    document.getElementById('resultado_5').style.display='none';
    document.getElementById('resultado_6').style.display='none';
}

function abrir_arte_5() {
    document.getElementById('sorteio1').style.display='none';
    document.getElementById('sorteio2').style.display='none';
    document.getElementById('sorteio3').style.display='none';
    document.getElementById('sorteio4').style.display='none';
    document.getElementById('sorteio5').style.display='flex';
    document.getElementById('sorteio6').style.display='none';
    document.getElementById('resultado_1').style.display='none';
    document.getElementById('resultado_2').style.display='none';
    document.getElementById('resultado_3').style.display='none';
    document.getElementById('resultado_4').style.display='none';
    document.getElementById('resultado_5').style.display='none';
    document.getElementById('resultado_6').style.display='none';
}

function abrir_arte_6() {
    document.getElementById('sorteio1').style.display='none';
    document.getElementById('sorteio2').style.display='none';
    document.getElementById('sorteio3').style.display='none';
    document.getElementById('sorteio4').style.display='none';
    document.getElementById('sorteio5').style.display='none';
    document.getElementById('sorteio6').style.display='flex';
    document.getElementById('resultado_1').style.display='none';
    document.getElementById('resultado_2').style.display='none';
    document.getElementById('resultado_3').style.display='none';
    document.getElementById('resultado_4').style.display='none';
    document.getElementById('resultado_5').style.display='none';
    document.getElementById('resultado_6').style.display='none';
}

function sorte_1() {

    var numero = [];
    var numero_sorte = '';
    var nome_ganhador = '';


    for (i = 1; i <= 50; i++) {
        numero.push(i);
        numero_sorte = numero[Math.floor(Math.random() * numero.length)];
    } 

    if (numero_sorte == 1) {
        nome_ganhador = 'Natália sanches';
    } if (numero_sorte == 2) {
        nome_ganhador = '2';
    } if (numero_sorte == 3) {
        nome_ganhador = 'Bill Nascimento';
    } if (numero_sorte == 4) {
        nome_ganhador = 'Maria Regina';
    } if (numero_sorte == 5) {
        nome_ganhador = '5';
    } if (numero_sorte == 6) {
        nome_ganhador = '6';
    } if (numero_sorte == 7) {
        nome_ganhador = 'Maria Virginia';
    } if (numero_sorte == 8) {
        nome_ganhador = 'Renato Alves';
    } if (numero_sorte == 9) {
        nome_ganhador = 'Rodrigo D Elia(Digo)';
    } if (numero_sorte == 10) {
        nome_ganhador = '10';
    } if (numero_sorte == 11) {
        nome_ganhador = '11';
    } if (numero_sorte == 12) {
        nome_ganhador = '12';
    } if (numero_sorte == 13) {
        nome_ganhador = 'Rodrigo D Elia(Digo)';
    } if (numero_sorte == 14) {
        nome_ganhador = '14';
    } if (numero_sorte == 15) {
        nome_ganhador = '15';
    } if (numero_sorte == 16) {
        nome_ganhador = '16';
    } if (numero_sorte == 17) {
        nome_ganhador = 'Janaina Juchem';
    } if (numero_sorte == 18) {
        nome_ganhador = 'Otacílio Buttignon';
    } if (numero_sorte == 19) {
        nome_ganhador = '19';
    } if (numero_sorte == 20) {
        nome_ganhador = '20';
    } if (numero_sorte == 21) {
        nome_ganhador = '21';
    } if (numero_sorte == 22) {
        nome_ganhador = '22';
    } if (numero_sorte == 23) {
        nome_ganhador = 'Maria Regina';
    } if (numero_sorte == 24) {
        nome_ganhador = 'Renato Alves';
    } if (numero_sorte == 25) {
        nome_ganhador = 'Cesar Hernandes';
    } if (numero_sorte == 26) {
        nome_ganhador = 'Mauricio Faragi';
    } if (numero_sorte == 27) {
        nome_ganhador = 'Mauricio Faragi';
    } if (numero_sorte == 28) {
        nome_ganhador = 'Jully Nascimento';
    } if (numero_sorte == 29) {
        nome_ganhador = 'Maria Virginia';
    } if (numero_sorte == 30) {
        nome_ganhador = 'Mauricio Faragi';
    } if (numero_sorte == 31) {
        nome_ganhador = 'Bianca Alba';
    } if (numero_sorte == 32) {
        nome_ganhador = 'Janaina Juchem';
    } if (numero_sorte == 33) {
        nome_ganhador = 'Cesar Hernandes';
    } if (numero_sorte == 34) {
        nome_ganhador = 'Maria Virginia';
    } if (numero_sorte == 35) {
        nome_ganhador = '35';
    } if (numero_sorte == 36) {
        nome_ganhador = 'Caio Becker';
    } if (numero_sorte == 37) {
        nome_ganhador = '37';
    } if (numero_sorte == 38) {
        nome_ganhador = '38';
    } if (numero_sorte == 39) {
        nome_ganhador = '39';
    } if (numero_sorte == 40) {
        nome_ganhador = '40';
    } if (numero_sorte == 41) {
        nome_ganhador = '41';
    } if (numero_sorte == 42) {
        nome_ganhador = 'Cesar Hernandes';
    } if (numero_sorte == 43) {
        nome_ganhador = '43';
    } if (numero_sorte == 44) {
        nome_ganhador = '44';
    } if (numero_sorte == 45) {
        nome_ganhador = '45';
    } if (numero_sorte == 46) {
        nome_ganhador = '46';
    } if (numero_sorte == 47) {
        nome_ganhador = '47';
    } if (numero_sorte == 48) {
        nome_ganhador = '48';
    } if (numero_sorte == 49) {
        nome_ganhador = '49';
    } if (numero_sorte == 50) {
        nome_ganhador = '50';
    } 

    nome1.innerHTML = `<h3>O numero sorteado foi</h3><br>O numero vendedor é: ${numero_sorte}<br>O nome do vencedor é: ${nome_ganhador}`;
    document.getElementById('resultado_1').style.display='block';
}

function sorte_2() {

    var numero = [];
    var numero_sorte = '';
    var nome_ganhador = '';


    for (i = 1; i <= 50; i++) {
        numero.push(i);
        numero_sorte = numero[Math.floor(Math.random() * numero.length)];
    } 

    if (numero_sorte == 1) {
        nome_ganhador = 'Cuca Bolafi';
    } if (numero_sorte == 2) {
        nome_ganhador = 'Cuca Bolafi';
    } if (numero_sorte == 3) {
        nome_ganhador = 'Shellah Avellar';
    } if (numero_sorte == 4) {
        nome_ganhador = '4';
    } if (numero_sorte == 5) {
        nome_ganhador = 'Fabio Nino';
    } if (numero_sorte == 6) {
        nome_ganhador = 'Vânia Bonesso';
    } if (numero_sorte == 7) {
        nome_ganhador = '7';
    } if (numero_sorte == 8) {
        nome_ganhador = 'Vanessa Bonesso';
    } if (numero_sorte == 9) {
        nome_ganhador = '9';
    } if (numero_sorte == 10) {
        nome_ganhador = '10';
    } if (numero_sorte == 11) {
        nome_ganhador = '11';
    } if (numero_sorte == 12) {
        nome_ganhador = '12';
    } if (numero_sorte == 13) {
        nome_ganhador = 'André Gimenes';
    } if (numero_sorte == 14) {
        nome_ganhador = '14';
    } if (numero_sorte == 15) {
        nome_ganhador = '15';
    } if (numero_sorte == 16) {
        nome_ganhador = 'Vânia Bonesso';
    } if (numero_sorte == 17) {
        nome_ganhador = '17';
    } if (numero_sorte == 18) {
        nome_ganhador = 'Vanessa Bonesso';
    } if (numero_sorte == 19) {
        nome_ganhador = 'Vanessa Bonesso';
    } if (numero_sorte == 20) {
        nome_ganhador = '20';
    } if (numero_sorte == 21) {
        nome_ganhador = '21';
    } if (numero_sorte == 22) {
        nome_ganhador = '22';
    } if (numero_sorte == 23) {
        nome_ganhador = 'Nuno José';
    } if (numero_sorte == 24) {
        nome_ganhador = '24';
    } if (numero_sorte == 25) {
        nome_ganhador = '25';
    } if (numero_sorte == 26) {
        nome_ganhador = '26';
    } if (numero_sorte == 27) {
        nome_ganhador = '27';
    } if (numero_sorte == 28) {
        nome_ganhador = 'André Gimenes';
    } if (numero_sorte == 29) {
        nome_ganhador = '29';
    } if (numero_sorte == 30) {
        nome_ganhador = '30';
    } if (numero_sorte == 31) {
        nome_ganhador = '31';
    } if (numero_sorte == 32) {
        nome_ganhador = '32';
    } if (numero_sorte == 33) {
        nome_ganhador = '33';
    } if (numero_sorte == 34) {
        nome_ganhador = '34';
    } if (numero_sorte == 35) {
        nome_ganhador = '35';
    } if (numero_sorte == 36) {
        nome_ganhador = '36';
    } if (numero_sorte == 37) {
        nome_ganhador = '37';
    } if (numero_sorte == 38) {
        nome_ganhador = '38';
    } if (numero_sorte == 39) {
        nome_ganhador = '39';
    } if (numero_sorte == 40) {
        nome_ganhador = '40';
    } if (numero_sorte == 41) {
        nome_ganhador = '41';
    } if (numero_sorte == 42) {
        nome_ganhador = 'Vanessa Bonesso';
    } if (numero_sorte == 43) {
        nome_ganhador = '43';
    } if (numero_sorte == 44) {
        nome_ganhador = '44';
    } if (numero_sorte == 45) {
        nome_ganhador = 'Milton Filho';
    } if (numero_sorte == 46) {
        nome_ganhador = '46';
    } if (numero_sorte == 47) {
        nome_ganhador = '47';
    } if (numero_sorte == 48) {
        nome_ganhador = '48';
    } if (numero_sorte == 49) {
        nome_ganhador = '49';
    } if (numero_sorte == 50) {
        nome_ganhador = '50';
    } 

    nome2.innerHTML = `<h3>O numero sorteado foi</h3><br>O numero vendedor é: ${numero_sorte}<br>O nome do vencedor é: ${nome_ganhador}`;
    document.getElementById('resultado_2').style.display='block';
}

function sorte_3() {

    var numero = [];
    var numero_sorte = '';
    var nome_ganhador = '';


    for (i = 1; i <= 50; i++) {
        numero.push(i);
        numero_sorte = numero[Math.floor(Math.random() * numero.length)];
    } 

    if (numero_sorte == 1) {
        nome_ganhador = '1';
    } if (numero_sorte == 2) {
        nome_ganhador = '2';
    } if (numero_sorte == 3) {
        nome_ganhador = '3';
    } if (numero_sorte == 4) {
        nome_ganhador = '4';
    } if (numero_sorte == 5) {
        nome_ganhador = '5';
    } if (numero_sorte == 6) {
        nome_ganhador = '6';
    } if (numero_sorte == 7) {
        nome_ganhador = '7';
    } if (numero_sorte == 8) {
        nome_ganhador = '8';
    } if (numero_sorte == 9) {
        nome_ganhador = '9';
    } if (numero_sorte == 10) {
        nome_ganhador = '10';
    } if (numero_sorte == 11) {
        nome_ganhador = '11';
    } if (numero_sorte == 12) {
        nome_ganhador = '12';
    } if (numero_sorte == 13) {
        nome_ganhador = '13';
    } if (numero_sorte == 14) {
        nome_ganhador = '14';
    } if (numero_sorte == 15) {
        nome_ganhador = '15';
    } if (numero_sorte == 16) {
        nome_ganhador = '16';
    } if (numero_sorte == 17) {
        nome_ganhador = '17';
    } if (numero_sorte == 18) {
        nome_ganhador = '18';
    } if (numero_sorte == 19) {
        nome_ganhador = '19';
    } if (numero_sorte == 20) {
        nome_ganhador = '20';
    } if (numero_sorte == 21) {
        nome_ganhador = '21';
    } if (numero_sorte == 22) {
        nome_ganhador = '22';
    } if (numero_sorte == 23) {
        nome_ganhador = '23';
    } if (numero_sorte == 24) {
        nome_ganhador = '24';
    } if (numero_sorte == 25) {
        nome_ganhador = '25';
    } if (numero_sorte == 26) {
        nome_ganhador = '26';
    } if (numero_sorte == 27) {
        nome_ganhador = '27';
    } if (numero_sorte == 28) {
        nome_ganhador = '28';
    } if (numero_sorte == 29) {
        nome_ganhador = '29';
    } if (numero_sorte == 30) {
        nome_ganhador = '30';
    } if (numero_sorte == 31) {
        nome_ganhador = '31';
    } if (numero_sorte == 32) {
        nome_ganhador = '32';
    } if (numero_sorte == 33) {
        nome_ganhador = '33';
    } if (numero_sorte == 34) {
        nome_ganhador = '34';
    } if (numero_sorte == 35) {
        nome_ganhador = '35';
    } if (numero_sorte == 36) {
        nome_ganhador = '36';
    } if (numero_sorte == 37) {
        nome_ganhador = '37';
    } if (numero_sorte == 38) {
        nome_ganhador = '38';
    } if (numero_sorte == 39) {
        nome_ganhador = '39';
    } if (numero_sorte == 40) {
        nome_ganhador = '40';
    } if (numero_sorte == 41) {
        nome_ganhador = '41';
    } if (numero_sorte == 42) {
        nome_ganhador = 'Miguel Menezes';
    } if (numero_sorte == 43) {
        nome_ganhador = '43';
    } if (numero_sorte == 44) {
        nome_ganhador = '44';
    } if (numero_sorte == 45) {
        nome_ganhador = '45';
    } if (numero_sorte == 46) {
        nome_ganhador = '46';
    } if (numero_sorte == 47) {
        nome_ganhador = '47';
    } if (numero_sorte == 48) {
        nome_ganhador = '48';
    } if (numero_sorte == 49) {
        nome_ganhador = '49';
    } if (numero_sorte == 50) {
        nome_ganhador = '50';
    } 

    nome3.innerHTML = `<h3>O numero sorteado foi</h3><br>O numero vendedor é: ${numero_sorte}<br>O nome do vencedor é: ${nome_ganhador}`;
    document.getElementById('resultado_3').style.display='block';
}

function sorte_4() {
    var numero = [];
    document.getElementById('resultado_4').style.display='block';
    var numero_sorte = '';
    var nome_ganhador = '';


    for (i = 1; i <= 50; i++) {
        numero.push(i);
        numero_sorte = numero[Math.floor(Math.random() * numero.length)];
    } 

    if (numero_sorte == 1) {
        nome_ganhador = 'Tatiane Takiyama';
    } if (numero_sorte == 2) {
        nome_ganhador = 'Michel Galiotto';
    } if (numero_sorte == 3) {
        nome_ganhador = 'Willians Viana';
    } if (numero_sorte == 4) {
        nome_ganhador = 'Domingos Verrone';
    } if (numero_sorte == 5) {
        nome_ganhador = 'Maria do Socorro Verrone';
    } if (numero_sorte == 6) {
        nome_ganhador = 'Ricardo Franco';
    } if (numero_sorte == 7) {
        nome_ganhador = 'Maria do Socorro Verrone';
    } if (numero_sorte == 8) {
        nome_ganhador = '8';
    } if (numero_sorte == 9) {
        nome_ganhador = 'Lêda Pena';
    } if (numero_sorte == 10) {
        nome_ganhador = 'Willians Viana';
    } if (numero_sorte == 11) {
        nome_ganhador = 'Willians Viana';
    } if (numero_sorte == 12) {
        nome_ganhador = 'Cleide Arabi';
    } if (numero_sorte == 13) {
        nome_ganhador = 'Domingos Verrone';
    } if (numero_sorte == 14) {
        nome_ganhador = 'Telma Simplício';
    } if (numero_sorte == 15) {
        nome_ganhador = 'Cleide Arabi';
    } if (numero_sorte == 16) {
        nome_ganhador = 'Roney dos Anjos';
    } if (numero_sorte == 17) {
        nome_ganhador = 'Andreia Verrone';
    } if (numero_sorte == 18) {
        nome_ganhador = 'Daniella Rodrigues';
    } if (numero_sorte == 19) {
        nome_ganhador = 'Estella Freitas';
    } if (numero_sorte == 20) {
        nome_ganhador = '20';
    } if (numero_sorte == 21) {
        nome_ganhador = 'Angélica Nascimento';
    } if (numero_sorte == 22) {
        nome_ganhador = 'Daniella Rodrigues';
    } if (numero_sorte == 23) {
        nome_ganhador = '23';
    } if (numero_sorte == 24) {
        nome_ganhador = 'Telma Simplício';
    } if (numero_sorte == 25) {
        nome_ganhador = 'Andreia Verrone';
    } if (numero_sorte == 26) {
        nome_ganhador = 'Lêda Pena';
    } if (numero_sorte == 27) {
        nome_ganhador = 'Lucas Mechinha';
    } if (numero_sorte == 28) {
        nome_ganhador = 'Meire Isidra';
    } if (numero_sorte == 29) {
        nome_ganhador = 'Pamela Regina';
    } if (numero_sorte == 30) {
        nome_ganhador = 'Meire Isidra';
    } if (numero_sorte == 31) {
        nome_ganhador = 'Domingos Verrone';
    } if (numero_sorte == 32) {
        nome_ganhador = 'Fernanda Gregório';
    } if (numero_sorte == 33) {
        nome_ganhador = 'Willians Viana';
    } if (numero_sorte == 34) {
        nome_ganhador = 'Ronny Abreu';
    } if (numero_sorte == 35) {
        nome_ganhador = 'Jany Patricio';
    } if (numero_sorte == 36) {
        nome_ganhador = 'Angélica Nascimento';
    } if (numero_sorte == 37) {
        nome_ganhador = 'Willians Viana';
    } if (numero_sorte == 38) {
        nome_ganhador = 'Jéssica Rosa';
    } if (numero_sorte == 39) {
        nome_ganhador = '39';
    } if (numero_sorte == 40) {
        nome_ganhador = '40';
    } if (numero_sorte == 41) {
        nome_ganhador = 'Ricardo Franco';
    } if (numero_sorte == 42) {
        nome_ganhador = '42';
    } if (numero_sorte == 43) {
        nome_ganhador = 'Daniella Rodrigues';
    } if (numero_sorte == 44) {
        nome_ganhador = 'Maria do Socorro Verrone';
    } if (numero_sorte == 45) {
        nome_ganhador = '45';
    } if (numero_sorte == 46) {
        nome_ganhador = '46';
    } if (numero_sorte == 47) {
        nome_ganhador = 'Luiz Campos';
    } if (numero_sorte == 48) {
        nome_ganhador = 'Lêda Pena';
    } if (numero_sorte == 49) {
        nome_ganhador = '49';
    } if (numero_sorte == 50) {
        nome_ganhador = 'Cleide Arabi';
    } 

    nome4.innerHTML = `O numero vendedor é: ${numero_sorte}<br>O nome do vencedor é: ${nome_ganhador}`
}

function sorte_5() {
    var numero = [];
    document.getElementById('resultado_5').style.display='block';
    var numero_sorte = '';
    var nome_ganhador = '';


    for (i = 1; i <= 50; i++) {
        numero.push(i);
        numero_sorte = numero[Math.floor(Math.random() * numero.length)];
    } 

    if (numero_sorte == 1) {
        nome_ganhador = 'Vinicius Melo';
    } if (numero_sorte == 2) {
        nome_ganhador = 'Maiara Garcia Schmidt';
    } if (numero_sorte == 3) {
        nome_ganhador = '3';
    } if (numero_sorte == 4) {
        nome_ganhador = '4';
    } if (numero_sorte == 5) {
        nome_ganhador = 'Agatha Andreo';
    } if (numero_sorte == 6) {
        nome_ganhador = '6';
    } if (numero_sorte == 7) {
        nome_ganhador = '7';
    } if (numero_sorte == 8) {
        nome_ganhador = 'Sérgio bispo';
    } if (numero_sorte == 9) {
        nome_ganhador = '9';
    } if (numero_sorte == 10) {
        nome_ganhador = '10';
    } if (numero_sorte == 11) {
        nome_ganhador = '11';
    } if (numero_sorte == 12) {
        nome_ganhador = 'Vívian Rosa';
    } if (numero_sorte == 13) {
        nome_ganhador = 'Isabele Rosa de Souza';
    } if (numero_sorte == 14) {
        nome_ganhador = '14';
    } if (numero_sorte == 15) {
        nome_ganhador = '15';
    } if (numero_sorte == 16) {
        nome_ganhador = 'Mariana Vigari';
    } if (numero_sorte == 17) {
        nome_ganhador = 'Maiara Garcia Schmidt';
    } if (numero_sorte == 18) {
        nome_ganhador = 'Isabele Rosa de Souza';
    } if (numero_sorte == 19) {
        nome_ganhador = 'Sérgio bispo';
    } if (numero_sorte == 20) {
        nome_ganhador = '20';
    } if (numero_sorte == 21) {
        nome_ganhador = 'Sérgio bispo';
    } if (numero_sorte == 22) {
        nome_ganhador = '22';
    } if (numero_sorte == 23) {
        nome_ganhador = '23';
    } if (numero_sorte == 24) {
        nome_ganhador = '24';
    } if (numero_sorte == 25) {
        nome_ganhador = '25';
    } if (numero_sorte == 26) {
        nome_ganhador = '26';
    } if (numero_sorte == 27) {
        nome_ganhador = '27';
    } if (numero_sorte == 28) {
        nome_ganhador = 'Agatha Andreo';
    } if (numero_sorte == 29) {
        nome_ganhador = 'Isabele Rosa de Souza';
    } if (numero_sorte == 30) {
        nome_ganhador = '30';
    } if (numero_sorte == 31) {
        nome_ganhador = '31';
    } if (numero_sorte == 32) {
        nome_ganhador = '32';
    } if (numero_sorte == 33) {
        nome_ganhador = '33';
    } if (numero_sorte == 34) {
        nome_ganhador = 'Mariana Vigari';
    } if (numero_sorte == 35) {
        nome_ganhador = '35';
    } if (numero_sorte == 36) {
        nome_ganhador = '36';
    } if (numero_sorte == 37) {
        nome_ganhador = '37';
    } if (numero_sorte == 38) {
        nome_ganhador = '38';
    } if (numero_sorte == 39) {
        nome_ganhador = '39';
    } if (numero_sorte == 40) {
        nome_ganhador = '40';
    } if (numero_sorte == 41) {
        nome_ganhador = '41';
    } if (numero_sorte == 42) {
        nome_ganhador = '42';
    } if (numero_sorte == 43) {
        nome_ganhador = '43';
    } if (numero_sorte == 44) {
        nome_ganhador = '44';
    } if (numero_sorte == 45) {
        nome_ganhador = '45';
    } if (numero_sorte == 46) {
        nome_ganhador = '46';
    } if (numero_sorte == 47) {
        nome_ganhador = '47';
    } if (numero_sorte == 48) {
        nome_ganhador = '48';
    } if (numero_sorte == 49) {
        nome_ganhador = '49';
    } if (numero_sorte == 50) {
        nome_ganhador = 'Vinicius Melo';
    } 

    nome5.innerHTML = `O numero vendedor é: ${numero_sorte}<br>O nome do vencedor é: ${nome_ganhador}`
}

function sorte_6() {
    var numero = [];
    document.getElementById('resultado_6').style.display='block';
    var numero_sorte = '';
    var nome_ganhador = '';


    for (i = 1; i <= 50; i++) {
        numero.push(i);
        numero_sorte = numero[Math.floor(Math.random() * numero.length)];
    } 

    if (numero_sorte == 1) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 2) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 3) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 4) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 5) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 6) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 7) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 8) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 9) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 10) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 11) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 12) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 13) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 14) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 15) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 16) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 17) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 18) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 19) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 20) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 21) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 22) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 23) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 24) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 25) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 26) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 27) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 28) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 29) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 30) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 31) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 32) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 33) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 34) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 35) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 36) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 37) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 38) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 39) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 40) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 41) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 42) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 43) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 44) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 45) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 46) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 47) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 48) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 49) {
        nome_ganhador = 'Osmar Buttignon';
    } if (numero_sorte == 50) {
        nome_ganhador = 'Osmar Buttignon';
    } 

    nome6.innerHTML = `O numero vendedor é: ${numero_sorte}<br>O nome do vencedor é: ${nome_ganhador}`
}