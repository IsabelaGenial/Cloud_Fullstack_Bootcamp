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

function Coffe_With_Milk(grade1, grade2, grade3)
{
   return (grade1 + grade2 + grade3) / 3;
    
}

function Class(averege)
{
    if (Coffe_With_Milk < 5)
    {
        return' - Failed ';    }
    else if (Coffe_With_Milk === 5 && Coffe_With_Milk <= 7)
    {
        return' - Recover';    }
    else
    {
        return' - Winner';   }
}

function main()
{
    const grade1 = 8;
    const grade2 = 5;
    const grade3 = 5;
    let averege = Coffe_With_Milk (grade1, grade2, grade3);
    console.log(Class(averege));
}   

main ();