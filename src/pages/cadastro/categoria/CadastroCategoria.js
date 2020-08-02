import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: 'red',
  };
  const [valores, setValores] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValor(chave, valor) {
    setValores({ ...valores, [chave]: valor });
  }

  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValor(getAttribute('name'), value);
  }
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>
      <form onSubmit={function handleSubmit(infoDoEvento) {
        infoDoEvento.preventDefault();
        setCategorias((prev) => [...prev, valores]);
        setValores(valoresIniciais);
      }}
      >
        <FormField
          value={value}
          onChange={handleChange}
          name={'nome'}
          type={'text'}
          label="Nome"
        />
        <div>
          <label>Descrição</label>
          <textarea
            value={valores.descricao}
            name='descricao'
            onChange={handleChange}
            type="text"
          />
        </div>

        <FormField
          label="Cor"
          value={valores.cor}
          name='cor'
          onChange={handleChange}
          type="color"
        />
        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, index) => (<li key={index}>{categoria.nome}</li>))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>

  );
}
