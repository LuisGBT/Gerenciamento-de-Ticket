Projeto: Gerenciamento de Tickets 

Este projeto visa realizar o gerenciamento de tickets de refeição entregues a cada colaborador, permitindo a emissão de relatórios sobre a quantidade de tickets distribuídos em períodos específicos. 

📖 Objetivo 

O sistema tem como objetivo: 

Gerenciar a quantidade de tickets de refeição entregues a cada colaborador diariamente. 

Emitir relatórios com a quantidade de tickets entregues a cada colaborador em um período determinado. 

⚙️ Regras de Negócio 

Não é permitido excluir registros do sistema. 

Cada colaborador e cada ticket deve possuir um ID único de identificação. 

Todos os campos das tabelas são obrigatórios. 

A situação do colaborador não pode iniciar como "Inativo". 

Deve ser registrado a data e hora em que o ticket foi entregue ao colaborador. 

Deve ser registrado a data e hora em que o registro do colaborador foi alterado. 

O CPF do colaborador deve ser único e não pode se repetir. 

🧑‍💻 Modelagem Lógica 

O projeto segue uma modelagem lógica que inclui: 

Relacionamento entre colaboradores e tickets. 

Armazenamento de informações de entrega de tickets e alterações de dados de colaboradores. 

Tela de celular 

🛠 Tecnologias Utilizadas 

NestJS: Framework para construção de APIs. 

Prisma ORM: Ferramenta para mapeamento objeto-relacional e gerenciamento de banco de dados. 

PostgreSQL: Banco de dados relacional utilizado. 

📌 Requisitos 

Antes de começar, certifique-se de ter os seguintes requisitos instalados: 

Node.js (versão 16 ou superior). 

PostgreSQL ou outro banco de dados compatível. 

NestJS CLI (caso ainda não tenha instalado). 

🚀 Configuração do Projeto 

1️⃣ Instale o NestJS CLI: npm i -g @nestjs/cli 

2️⃣ Instale o Prisma ORM e o Cliente Prisma: npm install @prisma/client 

3️⃣ Inicialize o Prisma: npx prisma init Isso criará o diretório prisma/ e o arquivo .env. 

4️⃣ Configure o banco de dados: Edite o arquivo .env e adicione a URL de conexão com o banco de dados: 

DATABASE_URL="postgresql://user:password@localhost:5432/meubanco" Substitua user, password e meubanco pelos valores corretos. 

5️⃣ Rode as migrações para criar as tabelas: npx prisma migrate dev --name init Isso criará as tabelas no banco e registrará o histórico de migrações. 

6️⃣ Gere os tipos do Prisma: npx prisma generate Isso gera automaticamente os tipos para o Prisma Client. 

7️⃣ Rodando o Projeto 🚀 Para rodar o servidor NestJS: npm run start:dev O servidor estará rodando em http://localhost:3000. 

📝 Licença Este projeto está sob a Licença MIT. Sinta-se à vontade para utilizar, modificar ou distribuir conforme necessário. 
