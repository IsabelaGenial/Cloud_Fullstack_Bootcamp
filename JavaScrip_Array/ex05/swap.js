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

const n = [2, 7, 3, 8, 10, 4]


let swap
let i

for (let i = 0; i < n.length; i++) 
{
    let n2 = n[i + 1]
    if (n[i] < n2)
    {
        swap = n2
    }
}
console.log(swap)