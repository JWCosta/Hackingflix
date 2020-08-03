import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

export default function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#ffffff",
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function onChangeInput(valueCategoria) {
    setValue(
      valueCategoria.target.getAttribute("name"),
      valueCategoria.target.value
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria: "
          type="text"
          placeholder="Nova Categoria"
          value={values.nome}
          name="nome"
          onChange={onChangeInput}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          placeholder="Descreva sua categoria"
          value={values.descricao}
          name="descricao"
          onChange={onChangeInput}
        />

        <FormField
          label="Cor: "
          type="color"
          value={values.cor}
          name="cor"
          onChange={onChangeInput}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
