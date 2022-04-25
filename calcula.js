function obteneroperandos(){
	let n1=document.getElementById("n1");
    let n2=document.getElementById("n2");

    x=parseInt(n1.value);
    y=parseInt(n2.value);	
	
	
	let r =suma(x,y);
	
	
	let myTotal=document.getElementById("total");
	myTotal.innerText="El Resultado es: "+ r;
}



function suma(a,b){

	
    return a+b;
    
}

module.exports =suma;
