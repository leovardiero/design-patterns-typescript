# Design Patterns

Repository for Design Pattern study following the [Udemy Course](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/) from [Luiz Otávio Miranda](https://www.udemy.com/user/luiz-otavio-miranda/)

## Design 1 - Singleton

### O que é?
Garantir que uma classe possua apenas uma instancia e fornece um ponto de acesso global para a mesma.

### Prós
- Acesso controlado à instancia única;
- Fácil de permitir mais instancias caso necessário;
- Substitui variáveis globais;

### Contras
- Difícil de testas;
- Viola o Princípio da Responsabilidade Única;
- Requer tratamento especial em caso de concorrencia;


## Design 2 - Builder

### O que é?
Separação do código que cria e o código que usa determinados objetos. 

Ajuda na criação de objetos complexos: 
- construtores complexos; 
- composite;
- uando envolve algoritmos de criação complexos. 

Permite a criação em etapas. Exemplo: uma classe que envolve 10 outras classes, ele cria sequencialmente cada classe, no momento do uso.

O objeto final pode varia de acordo com a necessidade.

### Prós
- Separa criação da utilização;
- Código cliente não precisa criar objetos diretamente;
- Mesmo código pode construir objetos diferentes;
- Ajuda na aplicação dos princípios SPR (Single Responsibility Principle) e OCP (Open-Closed Principle).

### Contras
- Código final fica muito complexo;