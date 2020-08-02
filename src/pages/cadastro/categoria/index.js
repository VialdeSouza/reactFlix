import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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
    const { name, value } = infosDoEvento.target;
    setValor(name, value);
  }

  useEffect(() => {
   const URL = 'http://localhost:8080/categorias'
   fetch(URL).then(async (respostaDoServidor) => {
     const resposta = await respostaDoServidor.json();
     setCategorias([
       ...resposta
      ])
   })
   
  }, [])
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
          value={valores.nome}
          onChange={handleChange}
          name={'nome'}
          type={'text'}
          label="Nome da Categoria"
        />
         <FormField
          value={valores.descricao}
          onChange={handleChange}
          name={'descricao'}
          type={'textarea'}
          label="Descrição"
        />

        <FormField
          label="Cor"
          value={valores.cor}
          name='cor'
          onChange={handleChange}
          type="color"
        />
        
        <Button>Cadastrar</Button>
      </form>


      {categorias.length === 0 && (
        <div>
            Loading...
        </div>
      ) }
      <ul>
        {categorias.map((categoria, index) => (<li key={index}>{categoria.nome}</li>))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>

  );
}
