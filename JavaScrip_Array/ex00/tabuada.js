/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   tabuada.js                                                               */
/*                                                                            */
/*   By: Isabela Genial <isabelagenial@gmai.com>                              */
/*                                                                            */
/*   Created: 2022/10/31 04:35:06 by Isabela Gen                              */
/*   Updated: 2022/10/31 04:35:06 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

//1) Crie um programa que dado um número imprima a sua tabuada.

const t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let l;
let i;

for (l = 0; l < t.length; l++)
{
	for (i = 0; i < n.length; i++)
	{
		let result;
		result = t[l] * n[i];
		console.log (`${t[l]} x ${n[i]} = ${result}`);
    }
	console.log ('---------------');  
}


// codigo modificado para imprimir a tabuada do 0 ao 10.