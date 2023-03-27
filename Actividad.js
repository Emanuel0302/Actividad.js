var edad = parseInt(prompt("digite el año en que nacio "))
var año = 2023
var resultado = año-edad


if(resultado <= 17){
    alert("Su edad es: "+ resultado + " " + "debe presentar copia de su tarjeta de identidad")
    } else{
        if(resultado >= 18)
        alert("Su edad es: "+ resultado + " " + "debe presentar copia de su cédula de ciudadanía")
    }