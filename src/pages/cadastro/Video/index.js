import React, { useEffect, useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import Create from "../../../repositories/videos";
import getAllCategories from "../../../repositories";

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { onChangeInput, values } = useForm({
    titulo: "Título do vídeo",
    url: "https://www.youtube.com/watch?v=y-4Rge7RP-I",
    categoria: "Nome da Categoria",
  });

  useEffect(() => {
    getAllCategories().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  console.log(categoryTitles);

  return (
    <PageDefault>
      <h1>Página de cadastro</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("Vídeo cadastrado com sucesso !!");

          const categoriaSelected = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

          Create({
            categoriaId: categoriaSelected.id,
            titulo: values.titulo,
            url: values.url,
          }).then(() => {
            console.log("Cadastrado com sucesso !!");
            history.push("/");
          });
        }}
      >
        <FormField
          label="Título do vídeo"
          value={values.titulo}
          type="text"
          name="titulo"
          onChange={onChangeInput}
        />

        <FormField
          label="URL do vídeo"
          value={values.url}
          type="text"
          name="url"
          onChange={onChangeInput}
        />

        <FormField
          label="Categoria"
          value={values.categoria}
          type="text"
          name="categoria"
          onChange={onChangeInput}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </PageDefault>
  );
}
