import ModalEdicaoStyled from './ModalEdicaoStyled';

interface ModalExclusaoPros {
  excluir: () => void;
  fechar: () => void;
}

function ModalExclusao(props: ModalExclusaoPros) {
  return (
    <ModalEdicaoStyled>
      <h1>Você deseja excluir?</h1>

      <button onClick={props.excluir}>Confirmar</button>
      <button onClick={props.fechar}>Fechar</button>
    </ModalEdicaoStyled>
  );
}

export default ModalExclusao;
