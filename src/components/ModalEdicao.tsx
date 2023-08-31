import { LivroProps } from '../pages/Home';

interface ModalEdicaoProps {
  livro: LivroProps;
  editar: () => void;
  mudaEstado: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  fechar: () => void;
}

function ModalEdicao(props: ModalEdicaoProps) {
  return (
    <>
      <label>Título:</label>
      <input type="text" value={props.livro.titulo} name="titulo" onChange={props.mudaEstado} />

      <label>Autor:</label>
      <input type="text" value={props.livro.autor} name="autor" onChange={props.mudaEstado} />

      <label>Ano de publicação:</label>
      <input type="number" value={props.livro.anoDePublicacao} name="anoDePublicacao" onChange={props.mudaEstado} />

      <label>Gênero:</label>
      <input type="text" value={props.livro.genero} name="genero" onChange={props.mudaEstado} />

      <label>Descrição:</label>
      <textarea value={props.livro.descricao} name="descricao" onChange={props.mudaEstado} />

      <button onClick={props.editar}>Editar</button>
      <button onClick={props.fechar}>Fechar</button>
    </>
  );
}

export default ModalEdicao;
