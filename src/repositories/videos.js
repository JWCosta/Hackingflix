import URL_BACKEND from "../config";

const URL_VIDEOS = `${URL_BACKEND}/videos`;

function Create(objectVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objectVideo),
  }).then(async (res) => {
    const retorno = await res.json();
    if (retorno) {
      return retorno;
    }
    throw new Error("Não foi possível cadastrar os dados !!");
  });
}

export default Create;
