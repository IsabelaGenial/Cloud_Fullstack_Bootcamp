/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   Coffe_With_Milk.js                                                       */
/*                                                                            */
/*   By: Isabela Genial <isabelamgenial@gmail.com>                            */
/*                                                                            */
/*   Created: 2022/10/18 01:02:36 by Isabela Gen                              */
/*   Updated: 2022/10/18 01:02:36 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

/*
Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da 
faculdade calcule e imprima a sua média e a sua classificação conforme a 
tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const grade1 = 3;
const grade2 = 4;
const grade3 = 4;
let Coffe_With_Milk = (grade1 + grade2 + grade3) / 3;

if (Coffe_With_Milk < 5)
{
    console.log('average:' + Coffe_With_Milk + ' - Failed ');
}
else if (Coffe_With_Milk === 5 && Coffe_With_Milk <= 7)
{
    console.log('average:' + Coffe_With_Milk + ' - Recover');
}
else
{
    console.log('average:' + Coffe_With_Milk + ' - Winner');
}