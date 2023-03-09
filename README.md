# Swag-Labs-Cypress.io
Projeto de teste Web utilizando Framework Cypress.io e a pagina Swag Labs para teste automatizados. 


Projeto de teste Web utilizando Framework Cypress.io e a pagina Swag Labs para teste automatizados. 
Este projeto foi desenvolvido com o objetivo de automatizar testes de interface utilizando Cypress e JavaScript.

Instalação
Faça o clone do repositório: git clone https://github.com/JonasCouto/Swag-Labs-Cypress.io.git

Instalação do Cypress
Para instalar o Cypress, você precisará ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados. Em seguida, execute o seguinte comando:

```npm install cypress --save-dev```

Estrutura base do projeto:

- A pasta cypress contém todos os arquivos relacionados à configuração e execução dos testes.
- A pasta fixtures contém arquivos de dados utilizados nos testes.
- A pasta e2e contém os arquivos de teste em si.
- A pasta support contém arquivos de configuração e hooks de execução dos testes.
- O arquivo cypress.config.js contém a configuração do Cypress.
- O arquivo package.json contém as dependências do projeto.

Execução dos testes
Para executar os testes, use o seguinte comando:

Copy code
```npx cypress run```
Você também pode abrir o painel do Cypress usando o comando:

Copy code
```npx cypress open```

Contribuindo
Faça o fork do projeto
Crie uma nova branch: git checkout -b minha-feature
Faça suas alterações e envie um pull request

Notas adicionais
Este projeto foi desenvolvido com a versão mais recente do Cypress 12.1.0
Certifique-se de que o aplicativo que você está testando esteja em execução antes de executar os testes.