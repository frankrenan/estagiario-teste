import { createConnection } from "typeorm";

createConnection().then(() => console.log("Conexão com o banco realizado com sucesso!")).catch(() => console.log("Falha ao tentar conectar com o banco de dados!"));