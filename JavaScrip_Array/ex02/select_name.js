/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   select_name.js                                                                  */
/*                                                                            */
/*   By: Isabela Genial <isabelagenial@gmai.com>                              */
/*                                                                            */
/*   Created: 2022/10/31 06:10:06 by Isabela Gen                              */
/*   Updated: 2022/10/31 06:10:06 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */
//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const n = ["cu", "isabela", "victoria", "V", "Valdemir"]
let i;
let s;

for (i = 0; i < n.length; i++) 
{
    if (n[i][0] === 'v' || n[i][0] === 'V')
    {
        console.log (n[i])
    }    
}
