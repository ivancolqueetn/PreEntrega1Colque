alert('bienvenido a la tienda que desa comprar? \n1 chocolates\n2 dulces\n3 frutas\n4 ensaladas\n5 gaseosas');
let chocolates=0;            // iniciamos variables
let dulces=0;
let frutas=0;
let ensaladas=0;
let gaseosas=0;
let comprar=0;               //bucle para iniciar la compra en la tienda,si es 1 dejamos de comprar para imprimir todo lo comprado
let chocolates_lotes=100;    //iniciamos cantidades disponibles del producto
let dulces_lotes=100;
let frutas_lotes=100;
let ensaladas_lotes=100;
let gaseosas_lotes=100;
while (comprar ===0){       //0 seguir comprando y 1 dejar de comprar y mostrar todos los productos comprados
let producto = parseInt(prompt('ingrese la opcion del producto que desea comprar\n1 chocolates  2 dulces    3 frutas\n4 ensalada    5 gaseosa'));
    if(producto === 1){     // seleccionamos producto 1 chocolate
        if(chocolates_lotes===0){         //  indica si se puede seguir comprando el producto 
            alert('no hay mas unidades disponibles, compre otro producto');
        }
        else{
            let chocolatesA= parseInt(prompt('cuantos chocolates desea comprar?'));         
            chocolates=chocolates+chocolatesA;           // actualizamos la variable                                         
            let chocolatesdis=100-chocolatesA;                  // ecuacion para identificar si compramos mas de 100 unidades                            
            if(chocolatesdis<0){                            
                alert('solo puede comprar un maximo de 100 chocolates');
                chocolatesdis=chocolates+chocolatesdis;         // chocolatesdis=chocolates disponibles                 
                chocolatesdis=parseInt(prompt('cuantos chocolates desea comprar? unidades disponibles '+chocolatesdis+' chocolates')); 
                chocolates=chocolatesdis;                      // actualizamos el producto                                     
            }
            else{
                chocolatesdis=chocolates_lotes;                //chocolates disponibles se igualan al numero de lotes disponibles              
                while (chocolates>100){                                                                                                          
                    let chocolatesN=parseInt(prompt('no tenemos mas de 100, cuantos desea comprar?\nunidades disponibles '+ chocolatesdis + ' chocolates'));     
                    chocolates=100-chocolates_lotes+chocolatesN;       //ecuacion para agregar mas productos sin pasar de las 100 unidades
            } 
            }
            if (chocolates >=0 && chocolates <= 100){                  // si el producto esta entre 0 a 100 se registra la compra              
                alert('usted compro '+ chocolates + ' chocolates');
            }
            chocolates_lotes=100-chocolates;                            // acutalizamos el producto con el numero de lotes disponibles
         }
    }
    else if(producto === 2){
        if(dulces_lotes===0){
            alert('no hay mas unidades disponibles, compre otro producto');
        }
        else{
            let dulcesA= parseInt(prompt('cuantos dulces desea comprar?'));       
            dulces=dulces+dulcesA;                                          
            let dulcesdis=100-dulcesA;                                            
            if(dulcesdis<0){
                alert('solo puede comprar un maximo de 100 dulces');
                dulcesdis=dulces+dulcesdis;                        
                dulcesdis=parseInt(prompt('cuantos dulces desea comprar? unidades disponibles '+dulcesdis+' dulces')); 
                dulces=dulcesdis;                                      
            }
            else{
                dulcesdis=dulces_lotes;                                                                         
                while (dulces>100){                                                                                          
                    let dulcesN=parseInt(prompt('no tenemos mas de 100, cuantos desea comprar?\nunidades disponibles '+ dulcesdis+' dulces'));      
                    dulces=100-dulces_lotes+dulcesN;       
            } 
            }
            if (dulces >=0 && dulces <= 100){                   
                alert('usted compro '+ dulces + ' dulces');
            }
            dulces_lotes=100-dulces;                          
         }
    }
    else if(producto === 3){
        if(frutas_lotes===0){
            alert('no hay mas unidades disponibles, compre otro producto');
        }
        else{
            let frutasA= parseInt(prompt('cuantas frutas desea comprar?'));       
            frutas=frutas+frutasA;                                          
            let frutasdis=100-frutasA;                                            
            if(frutasdis<0){
                alert('solo puede comprar un maximo de 100 frutas');
                frutasdis=frutas+frutasdis;                        
                frutasdis=parseInt(prompt('cuantas frutas desea comprar? unidades disponibles '+frutasdis+' frutas')); 
                frutas=frutasdis;                                      
            }
            else{
                frutasdis=frutas_lotes;                                                                         
                while (frutas>100){                                                                                          
                    let frutasN=parseInt(prompt('no tenemos mas de 100, cuantas desea comprar?\nunidades disponibles '+ frutasdis+' frutas'));      
                    frutas=100-frutas_lotes+frutasN;       
            } 
            }
            if (frutas >=0 && frutas <= 100){                   
                alert('usted compro '+ frutas + ' frutas');
            }
            frutas_lotes=100-frutas;                          
        }
    }
    else if(producto === 4){
        if(ensaladas_lotes===0){
            alert('no hay mas unidades disponibles, compre otro producto');
        }
        else{
            let ensaladasA= parseInt(prompt('cuantas ensaladas desea comprar?'));       
            ensaladas=ensaladas+ensaladasA;                                          
            let ensaladasdis=100-ensaladasA;                                            
            if(ensaladasdis<0){
                alert('solo puede comprar un maximo de 100 ensaladas');
                ensaladasdis=ensaladas+ensaladasdis;                        
                ensaladasdis=parseInt(prompt('cuantas ensaladas desea comprar? unidades disponibles '+ensaladasdis+' ensaladas')); 
                ensaladas=ensaladasdis;                                      
            }
            else{
                ensaladasdis=ensaladas_lotes;                                                                         
                while (ensaladas>100){                                                                                          
                    let frutasN=parseInt(prompt('no tenemos mas de 100, cuantas desea comprar?\nunidades disponibles '+ ensaladasdis+' ensaladas'));      
                    ensaladas=100-ensaladas_lotes+frutasN;       
            } 
            }
            if (ensaladas >=0 && ensaladas <= 100){                   
                alert('usted compro '+ ensaladas + ' ensaladas');
            }
            ensaladas_lotes=100-ensaladas;                          
        }
    }

    else if(producto === 5){
        if(gaseosas_lotes===0){
            alert('no hay mas unidades disponibles, compre otro producto');
        }
        else{
            let gaseosasA= parseInt(prompt('cuantas gaseosas desea comprar?'));       
            gaseosas=gaseosas+gaseosasA;                                          
            let gaseosasdis=100-gaseosasA;                                            
            if(gaseosasdis<0){
                alert('solo puede comprar un maximo de 100 ensaladas');
                gaseosasdis=gaseosas+gaseosasdis;                        
                gaseosasdis=parseInt(prompt('cuantas gaseosas desea comprar? unidades disponibles '+gaseosasdis+' gaseosas')); 
                gaseosas=gaseosasdis;                                      
            }
            else{
                gaseosasdis=gaseosas_lotes;                                                                         
                while (gaseosas>100){                                                                                          
                    let frutasN=parseInt(prompt('no tenemos mas de 100, cuantas desea comprar?\nunidades disponibles '+ gaseosasdis+' gaseosas'));      
                    gaseosas=100-gaseosas_lotes+frutasN;       
            } 
            }
            if (gaseosas >=0 && gaseosas <= 100){                   
                alert('usted compro '+ gaseosas + ' gaseosas');
            }
            gaseosas_lotes=100-gaseosas;                          
        }
    }
    comprar=parseInt(prompt('0 seguir comprando\n1 imprimir factura'))        
    while(comprar>1){
        comprar= parseInt(prompt('debe seleccionar 1 o 0 para continuar con el proceso\n0 seguir comprando\n1 imprimir factura'))
    }
    
}

function factura(a,b,c,d,e){                            // funcion para imprimir los productos comprados
    return alert("*********************  PRODUCTOS COMPRADOS  *******************\n************************************************************************\n"+a+ " chocolates\n"+b+" dulces \n"+c+" frutas\n"+d+" ensaldas\n"+e+" gaseosas");
}
factura(chocolates,dulces,frutas,ensaladas,gaseosas);

for(let i=0;i<=1;i=i+1){
    if(i===0){
        alert('gracias por su compra');
    }
    else if (i===1){
        alert("que tenga un buen dia :)");
    }
}













