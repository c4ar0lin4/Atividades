function encontrarmaiorNumero(num1, num2, num3) {
    var maior = num1;

    if (num2 > maior )  {

        maior = num2;

    }

        if (num3 > maior) {
            maior = num3;
        
        }

return maior;
    }

    var numero1 = 5 ;
    var numero2 = 8;
    var numero3 = 3;

    var maioenumero = encontrarmaiurnumero(numero1,numero2,numero3);
    console.log("O maior número é:, maiornumero");




    