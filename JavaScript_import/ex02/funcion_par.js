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

function pares (tab)
{
    const n = tab;
    let i;

    for (i = 0; i < n.length; i++) 
    {
        if (n[i] % 2 === 0)
        {
            console.log (`Números Pares: ${n[i]}`);
        }
        
    }
}

module.exports.pares = pares;