import { SERVIDOR } from "@/config/api";

// O endereço do servidor fica só no config/api.ts
export const API_BASE_URL = SERVIDOR;

export type Categoria = {
    id: number;
    nome: string;
};

type CategoriaApi = {
    id_categoria: number;
    nome_categoria: string;
    status_categoria: "ATIVO" | "INATIVO";
    ordem_categoria: number;
};

// Busca as categorias ativas no banco, já ordenadas pela ordem_categoria.
export async function buscarCategorias(): Promise<Categoria[]> {
    const resposta = await fetch(`${API_BASE_URL}/api/v1/categorias`);
    if (!resposta.ok) {
        throw new Error(`Erro ${resposta.status} ao buscar categorias`);
    }
    const json = await resposta.json();
    return json.data
        .filter((categoria: CategoriaApi) => categoria.status_categoria === "ATIVO")
        .sort(
            (a: CategoriaApi, b: CategoriaApi) => a.ordem_categoria - b.ordem_categoria
        )
        .map((categoria: CategoriaApi) => ({
            id: categoria.id_categoria,
            nome: categoria.nome_categoria,
        }));
}
