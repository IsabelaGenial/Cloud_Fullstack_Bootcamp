/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   average.js                                                               */
/*                                                                            */
/*   By: Isabela Genial <isabela@gmail.com>                                   */
/*                                                                            */
/*   Created: 2022/10/31 07:56:37 by Isabela Gen                              */
/*   Updated: 2022/10/31 07:56:37 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//Ex de lista = [2, 7, 3, 8, 10, 4]

const n = [2, 7, 3, 8, 10, 4];

let i 

for ( i = 0; i < n.length; i++) 
{
    if (n[i] < 5)
    {
        console.log(n[i]);
    }
}