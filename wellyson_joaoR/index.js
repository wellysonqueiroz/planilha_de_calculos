document.querySelector('#calcular').addEventListener('click', (evento)=>{

 evento.preventDefault();


 let valor1 = document.querySelector('#v1').value;
 let valor2 = document.querySelector('#v2').value;
 let valor3 = document.querySelector('#v3').value;
 
 let rt = Number(valor1) + Number(valor2) + Number(valor3);

 document.querySelector('#rt').value = rt;

 let valor5 = document.querySelector('#v5').value;
 let valor6 = document.querySelector('#v6').value;

 let dt = Number(valor5) + Number(valor6);

 document.querySelector('#dt').value = dt;

 let t = Number(rt) - Number(dt);

 document.querySelector('#t').value = t;

});





    
