import { useForm } from 'react-hook-form'
import { useContext } from "react";
import ContatosContext from '../contexts/ContatosContext';
import { useNavigate } from 'react-router-dom';

export default function Novo() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const {incluirContato} = useContext(ContatosContext)

  function onSubmit(data) {
    incluirContato(data)
    navigate("/")
  }

  return (
    <>
      <h2>Novo Contato</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* NOME */}
        <div></div>
        <label htmlFor="nome">Nome</label>
        <div></div>
        <input type="text" name="nome" id="nome" {...register("nome", { required: "Campo obrigatório" })} />
        {errors.nome && <p>{errors.nome.message}</p>}

        <div></div>
        {/* TELEFONE */}
        <label htmlFor="telefone">Telefone</label>
        <div></div>
        <input type="tel" name="telefone" id="telefone" {...register("telefone", { required: "Campo obrigatório" })} />
        {errors.telefone && <p>{errors.telefone.message}</p>}
        <div></div>
        
        {/* SUBMIT */}
        <button type="submit">Salvar</button>
        <div></div>
      </form>
    </>
  );
}
