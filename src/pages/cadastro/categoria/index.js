import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

export default function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: 'red'
    }
    const [valores, setValores] = useState(valoresIniciais);
    const [categorias, setCategorias] = useState([])

    function setValor(chave, valor){
        setValores({...valores, [chave]: valor});
    }
    return (

        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>
            <form onSubmit={function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias(prev => [...prev, valores])
                setValores(valoresIniciais                                    )
            }}>
                <div>
                    <label>Nome da Categoria</label>
                    <input
                        value={valores.nome}
                        onChange={({ target }) => {
                            setValor('nome', target.value)
                        }}
                        type='text' />
                </div>
                <div>
                    <label>Descrição</label>
                    <textarea
                        value={valores.descricao}
                        onChange={({ target }) => {
                            setValor('descricao', target.value)
                        }}
                        type='text' />
                </div>
                <div>
                    <label>Nome da Categoria</label>
                    <input
                        value={valores.cor}
                        onChange={({ target }) => {
                            setValor('cor', target.value)
                        }}
                        type='color' />
                </div>

                <button>Cadastrar</button>
            </form>
            <ul>
                {categorias.map((categoria, index) => (<li key={index}>{categoria.nome}</li>))

                }
            </ul>
            <Link to={'/'}>
                Ir para home
                </Link>
        </PageDefault>

    )
}
