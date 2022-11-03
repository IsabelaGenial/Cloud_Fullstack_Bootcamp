/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   Class_car.js                                                             */
/*                                                                            */
/*   By: Isabela Genial <isabelamgenial@gmail.com>                            */
/*                                                                            */
/*   Created: 2022/10/26 20:54:55 by Isabela Gen                              */
/*   Updated: 2022/10/26 20:54:55 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro 
{
    marca;
    cor;
    carkm;

    constructor (marca, cor, carkm)
    {
        this.marca = marca;
        this.cor = cor;
        this.carkm = carkm;

      
    }

    GastoDePercu (kmtrip, priceFuelGasoline) 
    {
        return  kmtrip / this.carkm * priceFuelGasoline;
    }
}

const Porche =  new Carro('Porche', 'prata', 9);
const Volkswagen = new Carro('Volkswagen', 'Branco', 13);
const Lamborghini = new Carro('Lamborghini', 'preta', 5);

console.log (Porche.GastoDePercu (750, 6.30));
console.log (Lamborghini.GastoDePercu (750, 6.30));
console.log (Volkswagen.GastoDePercu (750, 6.30));
