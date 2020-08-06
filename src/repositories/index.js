import URL_BACKEND from "../config";

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

function getAllCategories() {
  return fetch(`${URL_CATEGORIES}`).then(async (res) => {
    const retorno = await res.json();
    if (retorno) {
      return retorno;
    }
    throw new Error("Não foi possível buscar os dados !!");
  });
}

export default getAllCategories;
