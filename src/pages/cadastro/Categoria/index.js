import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import URL_BACKEND from "../../../config";
import repositories from "../../../repositories/categorias";
import Loading from "../../../components/Loading";

export default function CadastroCategoria() {
  const valoresIniciais = { titulo: "", descricao: "", cor: "" };

  const { onChangeInput, values, clearForm } = useForm(valoresIniciais);

  // const history = useHistory();

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(`${URL_BACKEND}/categorias`).then(async (res) => {
      const retorno = await res.json();
      setCategorias([...retorno]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, values]);

          repositories
            .createCategory({
              titulo: values.titulo,
              descricao: values.descricao,
              cor: values.cor,
            })
            .then(() => {
              console.log("Cadastrado com sucesso !!");
              // history.push("/");
            });

          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          placeholder="Nova Categoria"
          value={values.titulo}
          name="titulo"
          onChange={onChangeInput}
        />

        <FormField
          label="Descrição"
          type="textarea"
          placeholder="Descreva sua categoria"
          value={values.descricao}
          name="descricao"
          onChange={onChangeInput}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={onChangeInput}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <Loading />}

      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.titulo}`}>{categoria.titulo}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
