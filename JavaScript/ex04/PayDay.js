/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   PayDay.js                                                                */
/*                                                                            */
/*   By: Isabela Genial <isabelamgenial@gmail.com>                            */
/*                                                                            */
/*   Created: 2022/10/18 01:41:27 by Isabela Gen                              */
/*   Updated: 2022/10/18 01:41:27 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const product = 59.95;
let TypeOfPayment = 'Money';



if (TypeOfPayment === 'Money' || TypeOfPayment === 'Pix'  )
{
    //Money = 15%
    console.log("Total: $" + (product - 0.15 * product).toFixed(2))
}
else if (TypeOfPayment === 'Debit')
{
   //Debi = 10%
    console.log("Total: $" + (product - 0.10 * product).toFixed(2))
}
else if (TypeOfPayment === 'Credit2x')
{
    //Credit2x = 0
    console.log("Total: $" + product.toFixed(2))
}
else 
{
    //CreditMore = 10%;
    console.log("Total: $" + (product * 0.10 + product).toFixed(2))
}