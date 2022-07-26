const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//Exercicio A
console.log(minhaString.trim())

//Exercicio B
const comTrim = minhaString.trim()

console.log(`Quantidade de caracteres:\n
Com espeços: ${minhaString.length}\n
Sem espaços: ${comTrim.length}`)

//Exercicio C
console.log(minhaString.replaceAll("________","sticioso"))

