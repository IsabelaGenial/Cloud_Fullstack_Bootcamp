/* ************************************************************************** */
/*                                                                            */
/*   condition.js                                                             */
/*                                                                            */
/*   By: Isabela Genial <isabelamgenial@gmail.com>                            */
/*                                                                            */
/*   Created: 2022/10/17 20:00:28 by Isabela Gen                              */
/*   Updated: 2022/10/17 20:00:28 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const priceFuelGasoline = 6.66;
const priceFuelEthanol = 2.85;
const carEthanolkm = 9.6;
const carGasolinekm = 10;
const kmTrip = 100;
let typeFuel;

typeFuel = priceFuelGasoline;

if (typeFuel === priceFuelEthanol)
{
    console.log("Ethanol R$ " + (kmTrip / carEthanolkm) * priceFuelEthanol);
}
if (typeFuel === priceFuelGasoline) 
{
    console.log("Gasoline R$ " + (kmTrip / carGasolinekm) * priceFuelGasoline);
}