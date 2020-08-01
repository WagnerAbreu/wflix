import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: ''
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor,
      })
    }

    function handleChange(event){
      setValue(
        event.target.getAttribute('name'),
        event.target.value,
      );
    }

    return (
      <PageDefault>
        <h1>Cadastro de categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          setValues(valoresIniciais);
        }}>

          <FormField
            label="Nome"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
          <FormField
            label="Descrição"
            type="text"
            name="descricao"
            value={values.nome}
            onChange={handleChange}
          />
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.nome}
            onChange={handleChange}
          />

          {/*<div>
            <label>
              Nome:
              <input 
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}>
              </input>
            </label>
          </div>
          <div>
            <label>
              Descrição:
              <textarea 
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}>
              </textarea>
            </label>
          </div>
          <div>
            <label>
              Cor:
              <input 
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}>
              </input>
            </label>
          </div>*/}
          
          <button>Cadastrar</button>

        </form>

        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={`${categoria}${index}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Cancelar
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;