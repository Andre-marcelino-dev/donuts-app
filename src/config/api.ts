//const SERVIDOR = "http://localhost:8081"; // Endereço do servidor
 
//const SERVIDOR = "https://xyzcode.tipi5.smpsistema.com.br/davilla"; // Servidor de teste

//const SERVIDOR = "https://ctrlaltdev.tipi5.smpsistema.com.br/confeitaria"; // Servidor do The Gusta

const SERVIDOR = "http://192.168.0.97:8082"; // Cantinho Donuts local (IP do PC + porta do Docker)
 
const VERSAO_API = "v1";
 
const API = `${SERVIDOR}/api/${VERSAO_API}`; // Endereço da API
 
const IMAGEM = `${SERVIDOR}/donuts/images`; // Endereço da imagem
 
export { API, IMAGEM, SERVIDOR };