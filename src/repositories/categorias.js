import URL_BACKEND from "../config";

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

function getAllVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const retorno = await res.json();
      return retorno;
    }
    throw new Error("Não foi possível buscar os dados !!");
  });
}

function getAllCategories() {
  return fetch(`${URL_CATEGORIES}`).then(async (res) => {
    const retorno = await res.json();
    if (retorno) {
      return retorno;
    }
    throw new Error("Não foi possível buscar os dados !!");
  });
}

function createCategory(objectCategory) {
  return fetch(`${URL_CATEGORIES}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objectCategory),
  }).then(async (res) => {
    if (res.ok) {
      const retorno = await res.json();
      console.log(retorno);
    }
    throw new Error("Não foi possível cadastrar os dados !!");
  });
}

export default { createCategory, getAllVideos, getAllCategories };
