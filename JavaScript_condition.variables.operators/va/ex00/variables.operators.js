/* ************************************************************************** */
/*                                                                            */
/*   variables.operators.js                                                   */
/*                                                                            */
/*   By: Isabela Genial <isabelamgenial@gmail.com>                            */
/*                                                                            */
/*   Created: 2022/10/17 20:00:28 by Isabela Gen                              */
/*   Updated: 2022/10/17 20:00:28 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const priceFuel = 5.79; // const - declara uma varievel constante (não mutavel).
let kmCar = 9; // declara uma variavel local de escopo (mutavel)
const kmTrip = 754;

console.log('R$'  + (kmTrip / kmCar) * priceFuel);
