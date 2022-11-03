/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   numb.js                                                                  */
/*                                                                            */
/*   By: Isabela Genial <isabelagenial@gmai.com>                              */
/*                                                                            */
/*   Created: 2022/10/31 05:35:06 by Isabela Gen                              */
/*   Updated: 2022/10/31 05:35:06 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const n = [0, 1, 36, 37, 4, 5, 78, 7, 99, 9, 10, 11, 12]

let i 

for ( i = 0; i < n.length; i++) 
{
    if (n[i] % 2 === 0)
    {
        console.log(n[i]);
    }
}