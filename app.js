//Crear calculadora en javascript
//suma,restas,multiplicacion, porcentajes,
function calculator(){
    let n1=Number(prompt("N1:"));
    let n2=Number(prompt("N2:"));

    let sum,res,mul,div;
    sum=n1+n2;
    res=n1-n2;
    mul=n1*n2;
    div=n1/n2;

    //para mostrar los resultado en html
    document.getElementById("results").innerHTML= `
    <p class="result">${n1}+${n2}=${sum}</p>
    <p class="result">${n1}-${n2}=${res}</p>
    <p class="result">${n1}*${n2}=${mul}</p>
    <p class="result">${n1}/${n2}=${div}</p>`

}