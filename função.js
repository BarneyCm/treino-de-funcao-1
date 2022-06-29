let nameNav = prompt("Qual nome da nave?")

let velocidade = 0

let Name = prompt ("Qual nome do piloto?")

let acelerando = 5

menu() 

function menu(){
    let opções = prompt ("Velocidade da nave: 0Km/s \n\nQual opção o piloto " + Name +  " deseja executar \n1-Acelerar 5km/s \n2-Desacelerar 5km/s \n3-Imprimir dados de bordo \n4-Sair do programa")
     switch(opções) {
        case "1":
         acelerar()  
         break
        case "2":
         desacelerar()  
         break
        case "3":
         dados()  
         break
        case "4":
         sair()  
         break
        default:
         menu()     
     }
return (opções)
}

function acelerar(){
    velocidade = velocidade + acelerando
    alert ("A nova velocidade é: " + velocidade + "km/s")
    menu() 
}

function desacelerar(){
    if(velocidade<=0){alert("Sua nave está parada!")}
    else if (velocidade >= 5){
        velocidade = velocidade - acelerando
    alert ("Nova velocidade é: " + velocidade + "km/s") 
    }
    menu()
}

function dados(){
    alert("O nome do piloto: " + Name + "\nNome da nave: " + nameNav + "\nVelocidade atual: " + velocidade + "km/s")
    menu()
}

function sair(){
    alert("O programa está encerrando!! Obrigado pela sua presença!!")
}