const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 5.5 },
  { nome: "Carla", nota: 6 },
  { nome: "Diego", nota: 4 },
  { nome: "Elisa", nota: 9.2 },
];

// Retorna apenas os alunos com nota maior ou igual a 6
const aprovados = (lista) => lista.filter(({ nota }) => nota >= 6);

console.log(aprovados(alunos));
