/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   Body_mass_index.js                                                       */
/*                                                                            */
/*   By: Isabela Genial <isabelamgenial@gmail.com>                            */
/*                                                                            */
/*   Created: 2022/10/18 01:21:56 by Isabela Gen                              */
/*   Updated: 2022/10/18 01:21:56 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

/*
O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

function Calculetor (Weight, height)
{
  return Weight / (height * height);
}


function Class (BMI)
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
function main ()
{
    const Weight = 100.70;
    const height = 1.53;
    let BMI = Calculetor (Weight, height);

    console.log(Class(BMI));
}

main();
