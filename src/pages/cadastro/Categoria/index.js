import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import URL_BACKEND from "../../../config";

export default function CadastroCategoria() {
  const valoresIniciais = {};

  const { onChangeInput, values, handleSubmit } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(`${URL_BACKEND}/categorias`).then(async (res) => {
      const retorno = await res.json();
      setCategorias([...retorno]);
    });
  });

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          placeholder="Nova Categoria"
          value={values.nome}
          name="nome"
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

      {categorias.length === 0 && <div>Loading ...</div>}

      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.titulo}`}>{categoria.titulo}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
