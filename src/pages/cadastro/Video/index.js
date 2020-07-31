import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';




export default function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Página de cadastro</h1>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  )
}