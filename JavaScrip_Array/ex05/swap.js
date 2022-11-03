/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   swap.js                                                                  */
/*                                                                            */
/*   By: Isabela Genial <isabelamgenail@gmail.com>                            */
/*                                                                            */
/*   Created: 2022/10/31 08:06:19 by Isabela Gen                              */
/*   Updated: 2022/10/31 08:06:19 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//Ex de lista de notas = [2, 7, 3, 8, 10, 4]

const n = [400, 2, 7, 3, 8, 4, 200]


let swap = 0;
let i;

for (i = 0; i < n.length; i++) 
{
    if (swap < n[i])
    {
       swap = n[i]
    }
}
console.log(swap)