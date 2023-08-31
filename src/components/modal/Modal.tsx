import { LivroProps } from '../../pages/Home';
import ModalEdicao from './ModalEdicao';
import ModalExclusao from './ModalExclusao';

interface ModalProps {
  type: 'edicao' | 'exclusao';
  livro: LivroProps;
  editar: () => void;
  mudaEstado: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  fechar: () => void;
  excluir: () => void;
}

function Modal(props: ModalProps) {
  return (
    <div>
      {props.type === 'edicao' ? (
        <ModalEdicao livro={props.livro} editar={props.editar} mudaEstado={props.mudaEstado} fechar={props.fechar} />
      ) : (
        <ModalExclusao excluir={props.excluir} fechar={props.fechar} />
      )}
    </div>
  );
}

export default Modal;
