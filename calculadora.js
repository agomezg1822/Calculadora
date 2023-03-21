//tarea: agregar boton "C", para borrar
// que pasa cuando sale un error?  --try catch--


var botones=["7","8","9","+","4","5","6","-","1","2","3","*","0",".","=","/"];

function calculadora(){
    //1. Crear elemento
    //2. agregar atributos(opcional)
    //3. insertar el elemento en el DOM

    
    //div calculadora
    const  divCalculadora= document.createElement("div");
    divCalculadora.setAttribute("id","calculadora");
    document.body.appendChild(divCalculadora);
   

    //div pantalla   
    const  divPantalla= document.createElement("div");
    divPantalla.setAttribute("id","divPantalla");

    divCalculadora.appendChild(divPantalla);

    //pantalla
    const pantalla= document.createElement("input");
    pantalla.setAttribute("id","pantalla");
    pantalla.setAttribute("type","text");
    pantalla.setAttribute("name","pantalla");
    pantalla.setAttribute("value","0");
    pantalla.setAttribute("class","border-light")
    pantalla.setAttribute("class","")
    //pantalla.setAttribute("class","position-absolute top-50 start-50 translate-middle")
    pantalla.setAttribute("disabled","true");
    
    divPantalla.appendChild(pantalla);


    //div botones
    const  divBotones= document.createElement("div")
    divBotones.setAttribute("id","botones");
   
    divCalculadora.appendChild(divBotones);
    
    
    for(let i=0;i<botones.length;i++){
        if(i%4==0){
            const divFila=document.createElement("div");
            divFila.setAttribute("class","row");
            divBotones.appendChild(divFila);
        }
        let boton=document.createElement("button");
        boton.setAttribute("id","boton"+botones[i]);
        boton.setAttribute("class","btn btn-success col-3 border-light" );
        boton.innerHTML=botones[i];
      
        boton.addEventListener("click",function(){
            procesarEvento(boton);

        })

        divBotones.appendChild(boton);
    }
    
    
    
   
    
}
function procesarEvento(boton){
    let miPantalla=document.getElementById("pantalla");

    if(miPantalla.value=="0"){
        miPantalla.value="";
    }
    if(boton.innerHTML!="="){
    miPantalla.value+=boton.innerHTML;}
    else{
        let resultado= math.evaluate(miPantalla.value)
        miPantalla.value=resultado
    }
}

calculadora();