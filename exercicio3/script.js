//Exercicio A
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \n
\"BOAS VINDAS, mas não deixe o gato sair.\""
console.log(frase)

//Exercicio B
const novaFrase = frase.replaceAll('verde','rosa').replaceAll('azul','laranja')
console.log(novaFrase)

//Exercicio C
console.log(`A nova string possui \"verde\"?\n 
${novaFrase.includes("verde")}\n
E \"laranja\"?\n
${novaFrase.includes("laranja")}`)

//Extra
/*const msgMaiuscula = novaFrase.replaceAll("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")
console.log(msgMaiuscula)*/

const msgMaiuscula = novaFrase.toUpperCase("mas não deixe o gato sair")
console.log(msgMaiuscula)


