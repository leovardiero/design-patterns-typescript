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
- 

## Design 3 - Prototype

A intenção acima significa que você pode criar objetos protótipos que têm um método específico (clone) para clonar seus dados em um novo objeto. Isso evita a recriação de objetos caros ou complexos para serem criados.

- Precisar que seu código não dependa de classes concretas para a criação de novos objetos;
- Quiser evitar explosão de subclasses para objetos muito similares;
- Quiser evitar a recriação de objetos "caros" ou "complexos".

### Prós
- Oculta classes concretas do código cliente;
- Ajuda na criação de objetos caros ou complexos;
- Evita a explosão de subclasses.


### Contras
- Clonar objetos que que tem referências para outros objetos pode ser super complexo.

## Design 4 - Factory

Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instanciação para as subclasses.

- É um padrão de projeto de criação (lida com a criação de objetos);
- Oculta a lógica de instanciação do código cliente. O método fábrica será responsável por instanciar as classes desejadas;
- É obtido através de herança. O método fábrica pode ser criado ou sobrescrito por subclasses;
- Dá flexibilidade ao código cliente permitindo a criação de novas factories sem a necessidade de alterar código já escrito (OCP);
- Pode usar parâmetros para determinar o tipo dos objetos a serem criados ou os parâmetros a serem enviados aos objetos sendo criados;

Aplicabilidade:
- Use o factory method quando não souber com certeza quais os tipos de objetos o seu código vai precisar;
- Use o factory method para permitir a extensão de suas factories para criação de novos objetos (isso ajuda a aplicar o Open/Closed Principle);
- Use o factory method para desacoplar o código que cria do código que usa as classes (Single Responsibility Principle);
- Use o factory method para dar um hook (gancho) às subclasses para permitir que elas decidam a lógica de criação de objetos;
- Use o factory method para eliminar duplicação de código na criação de objetos.

### Prós
- Ajuda a aplicar o Open/Closed Principle. Seu código vai estar aberto para extensão;
- Ajuda na aplicação do Single Responsibility Principle. Separa o código que cria do código que usa o objeto;
- Ajuda no desacoplamento do seu código.


### Contras
- Pode causar uma explosão de subclasses. Será necessário uma classe Creator para cada ConcreteProduct. Só é vantajoso quando já seria necessário estender a classe Creator na estrutura.