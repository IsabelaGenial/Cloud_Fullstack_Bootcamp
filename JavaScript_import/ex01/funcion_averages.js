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

function average (tab)
{
    const n = tab;

    let swap = 0;
    let i;

    for (i = 0; i < n.length; i++) 
    {
        if (swap < n[i])
        {
            swap = n[i];
        }
        
    }
    console.log (`Maior nota: ${swap}`);
    for (i = 0; i < n.length; i++) 
    {
        if (swap > n[i])
        {
            swap = n[i];
        }  
    }
    console.log (`Menor nota: ${swap}`);
}

module.exports.average = average;