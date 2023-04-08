var botones=["C",".","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="];

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

    //Input pantalla
    const pantalla= document.createElement("input");
    pantalla.setAttribute("id","pantalla");
    pantalla.setAttribute("type","text");
    pantalla.setAttribute("name","pantalla");
    pantalla.setAttribute("value"," ");
    pantalla.setAttribute("disabled","true");
    divPantalla.appendChild(pantalla);

    //div botones
    const  divBotones= document.createElement("div")
    divBotones.setAttribute("id","botones");
    divBotones.setAttribute("type","button");
    divBotones.setAttribute("class","botones");
    divBotones.setAttribute("type","button");
    divCalculadora.appendChild(divBotones);
    
    
    for(let i=0;i<botones.length;i++){
        if(i%4==0){
            const divFila=document.createElement("div");
            divFila.setAttribute("class","row"+[i]);
            divBotones.appendChild(divFila);
        }

        let boton=document.createElement("button");
        boton.setAttribute("id","boton");
        boton.setAttribute("class","btn btn-dark rounded-circle mx-1 my-1");
        boton.innerHTML=botones[i];

        boton.addEventListener("click",function(){
            procesarEvento(boton);
        });
        divBotones.appendChild(boton);
    }
}

function procesarEvento(boton){

    let miPantalla=document.getElementById("pantalla");

    try{
        if(boton.innerHTML!="="){
            miPantalla.value+=boton.innerHTML;
        }
        if(boton.innerHTML=="C"){
            miPantalla.value=" ";
        }
    
        if(boton.innerHTML=="="){
            let resultado= math.evaluate(miPantalla.value);
            miPantalla.value=resultado;
        }
    } catch(error){
        miPantalla.value="Error";
    }
}

calculadora();