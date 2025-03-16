



var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

btn1.addEventListener('click', function(){

    result = document.getElementById("result1")
    

    var base;
    base = document.getElementById("base");
    base = parseInt(base.value); /*Utilize o .value para absover o algo que o usuário digito */
  

    var altura;
    altura = document.getElementById("altura");
    altura = parseInt(altura.value);

    area = base * altura


    result = result.textContent = "a área do retângulo com "+ base +"m em base e "+ altura +"m de altura é: " + area +"m²"
 
} ) 

btn2.addEventListener('click', function(){

    result = document.getElementById("result2");

    var a;
    a = document.getElementById("n1");
    a = parseInt(a.value);

    var b;
    b = document.getElementById("n2");
    b = parseInt(b.value);
          
    var c;
    c = document.getElementById("n3");
    c = parseInt(c.value);
   
    media = (a  + b + c) / 3;
    media = media.toFixed(1);
  
    result = result.textContent = "média é: " + media;
    
})

btn3.addEventListener('click', function(){

    result = document.getElementById("result3");
    var preco;
    preco = document.getElementById("preco");
    preco = parseInt(preco.value);
    
    var desc;
    desc = document.getElementById("desc");
    desc = parseInt(desc.value);

    desconto = preco*(desc/100);

    total = preco - desconto;
    
    total = total.toFixed(2) ;
    desconto = desconto.toFixed(2);

    result = result.textContent = "Preço original: " + preco + " R$ valor do deconto: "+desconto+". Total com desconto de "+ desc +"% : "+ total +""

})

btn4.addEventListener('click', function(){

    result = document.getElementById("result4");
    
    var area;
    area = document.getElementById("area");
    area = parseInt(area.value);

    var porlitro 
    porlitro = document.getElementById("litro");
    porlitro = parseInt(porlitro.value);
    

    var necessario;
    necessario = area / porlitro;
    necessario = necessario.toFixed(2);

    result = result.textContent = "Você precisará de "+ necessario + " litro de tintas para pintar parede de "+area+" m²";
})

btn5.addEventListener('click', function(){

    result = document.getElementById("result5");

    var celsius;
   
    celsius = document.getElementById("celsius");
    celsius = parseInt(celsius.value);

    /* Fórm   

    °F = ( C° * 1.8 ) + 32
    
    */

    var fahren

    fahren = (celsius * 1.8) + 32;

    fahren = fahren.toFixed(1)


    result = result.textContent = "A temperatura "+ celsius+"° Celsius convertido em Fahrenheit é: "+fahren+"°F";



})