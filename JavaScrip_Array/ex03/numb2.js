/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   numb2.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Isabela Genial <marvin@42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/31 07:13:18 by Isabela Gen       #+#    #+#             */
/*   Updated: 2022/10/31 07:13:18 by Isabela Gen      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const n = [];

let x; 
let x2;

for (x = 10; x <= 50; x++) 
{
    
    if (x % 2 == 0)
    {
    n.push(x);
    }
}

console.log (n);