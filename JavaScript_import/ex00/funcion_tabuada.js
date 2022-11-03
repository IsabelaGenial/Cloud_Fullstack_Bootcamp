/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   main.js                                                                  */
/*                                                                            */
/*   By: Isabela Genial <isabelagenial@gmail.com>                             */
/*                                                                            */
/*   Created: 2022/11/01 20:11:54 by Isabela Gen                              */
/*   Updated: 2022/11/01 20:11:54 by Isabela Gen                              */
/*                                                                            */
/* ************************************************************************** */

function tabuada (number)
{
    const t = [number];
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
}

module.exports.tabuada = tabuada;