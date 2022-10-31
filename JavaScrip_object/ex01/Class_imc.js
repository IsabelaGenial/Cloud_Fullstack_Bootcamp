/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   Class_imc.js                                                             */
/*                                                                            */
/*   By: Isabela Genial <isabelamgenial@gmail.com>                            */
/*                                                                            */
/*   Created: 2022/10/27 22:54:55 by Isabela Gen                              */
/*   Updated: 2022/10/27 22:54:55 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */


class Pessoas
{
    nome;
    peso;
    altura;

    constructor (nome, peso, altura)
    {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    BMI (peso, altura)
    {
      return this.peso / (this.altura * this.altura);
    }

    Class (BMI)
    {
        if (BMI < 18.5)
        {
            return ' - Feather! ';
        }
        else if (BMI > 18.5 && BMI < 25 )
        {
            return ' - Good! ';
        }
        else if (BMI > 25 && BMI < 30 )
        {
            return ' - Be Careful!';
        }
        else if (BMI > 30 && BMI < 40 )
        {
            return ' - Oh My God!';
        }
        else 
        {
            return ' - Mama called the doctor!';
        }

    }
}


const jose = new Pessoas( 'jose', 70 , 1.75);

console.log(jose.BMI (70 , 1.75));
console.log (jose.Class (jose.BMI(70, 1.75)));