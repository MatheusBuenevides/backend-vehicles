
# Vehicle CRUD Backend

Este projeto é um backend simples desenvolvido em Node.js para realizar operações de CRUD (Create, Read, Update, Delete) de veículos, com armazenamento de dados em arquivos. Também inclui testes unitários usando Mocha e Chai.

## Funcionalidades

- **Criar** um novo veículo
- **Listar** todos os veículos
- **Buscar** um veículo por ID
- **Atualizar** um veículo existente
- **Excluir** um veículo

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Mocha](https://mochajs.org/) - Testes unitários
- [Chai](https://www.chaijs.com/) - Testes unitários
- [FS (File System)](https://nodejs.org/api/fs.html) - Manipulação de arquivos para armazenamento de dados

## Estrutura do Projeto

```bash
backend-vehicles/
├── controllers/
│   └── vehicleController.js # Lógica das rotas
├── models/
│   └── vehicleModel.js      # Manipulação de dados e operações de CRUD
├── routes/
│   └── vehicleRoutes.js     # Definição de rotas
├── tests/
│   └── vehicleTest.js       # Testes unitários com Mocha e Chai
├── data/
│   └── vehicles.json        # Arquivo de armazenamento dos dados de veículos
└── server.js                # Arquivo principal de inicialização do servidor
```

## Requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/MatheusBuenevides/vehicle-crud-backend.git
cd vehicle-crud-backend
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

Por padrão, o servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

### Criar um novo veículo

**POST** `/vehicles`

**Body** (JSON):

```json
{
  "id": "1",
  "placa": "ABC-1234",
  "chassi": "123456789",
  "renavam": "987654321",
  "modelo": "Model X",
  "marca": "Tesla",
  "ano": 2021
}
```

### Listar todos os veículos

**GET** `/vehicles`

### Buscar um veículo por ID

**GET** `/vehicles/:id`

### Atualizar um veículo

**PUT** `/vehicles/:id`

**Body** (JSON):

```json
{
  "id": "1",
  "placa": "DEF-5678",
  "chassi": "654321987",
  "renavam": "876543210",
  "modelo": "Model S",
  "marca": "Tesla",
  "ano": 2022
}
```

### Excluir um veículo

**DELETE** `/vehicles/:id`

## Testes

Este projeto utiliza Mocha e Chai para testes unitários. Para rodar os testes, use o seguinte comando:

```bash
npm test
```

Os testes verificam as funcionalidades de criar, ler, atualizar e deletar veículos no sistema.

## Contribuição

Se desejar contribuir, sinta-se à vontade para abrir issues ou pull requests.

---

## Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

- **Autor:** Matheus Gomes Buenevides
- **E-mail:** matheusgomesbuenevides@gmail.com(mailto:matheusgomesbuenevides@gmail.com)
