// Abstração: classe base que não pode ser instanciada diretamente
class Veiculo {
  constructor(marca, modelo, ano) {
    if (new.target === Veiculo) {
      throw new Error("Veiculo é uma classe abstrata e não pode ser instanciada.");
    }
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
    return `${this.modelo} ligado.`;
  }

  desligar() {
    this.ligado = false;
    return `${this.modelo} desligado.`;
  }

  // Método abstrato: cada herdeira implementa o seu
  acelerar() {
    throw new Error("O método acelerar() deve ser implementado pela subclasse.");
  }

  descricao() {
    return `${this.marca} ${this.modelo} (${this.ano})`;
  }
}

// Herdeira 1
class Carro extends Veiculo {
  constructor(marca, modelo, ano, portas) {
    super(marca, modelo, ano);
    this.portas = portas;
  }

  acelerar() {
    return `${this.descricao()} acelera suavemente com ${this.portas} portas.`;
  }
}

// Herdeira 2
class Moto extends Veiculo {
  constructor(marca, modelo, ano, cilindradas) {
    super(marca, modelo, ano);
    this.cilindradas = cilindradas;
  }

  acelerar() {
    return `${this.descricao()} dispara com ${this.cilindradas}cc!`;
  }
}

// Herdeira 3
class Caminhao extends Veiculo {
  constructor(marca, modelo, ano, capacidadeKg) {
    super(marca, modelo, ano);
    this.capacidadeKg = capacidadeKg;
  }

  acelerar() {
    return `${this.descricao()} acelera devagar carregando até ${this.capacidadeKg}kg.`;
  }
}

// Instâncias
const carro = new Carro("Toyota", "Corolla", 2022, 4);
const moto = new Moto("Honda", "CB 500", 2021, 500);
const caminhao = new Caminhao("Volvo", "FH 540", 2020, 25000);

for (const v of [carro, moto, caminhao]) {
  console.log(v.ligar());
  console.log(v.acelerar());
  console.log(v.desligar());
  console.log("---");
}

// A classe abstrata não pode ser instanciada
try {
  new Veiculo("Genérica", "X", 2000);
} catch (e) {
  console.log("Erro esperado:", e.message);
}
