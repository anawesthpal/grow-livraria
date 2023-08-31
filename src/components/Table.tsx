import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LivroProps } from '../pages/Home';
import { DeleteButton, EditButton, TableBook } from './TableStyled';

interface TableProps {
  livros: LivroProps[];
  prepararEdicao: (id: string) => void;
  prepararExclusao: (id: string) => void;
}

const Table = (props: TableProps) => {
  return (
    <TableBook>
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Autor</th>
          <th scope="col">Ano de Publicação</th>
          <th scope="col">Gênero</th>
          <th scope="col">Descrição</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.livros.map((livro) => (
          <tr key={livro.id}>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>{livro.anoDePublicacao}</td>
            <td>{livro.genero}</td>
            <td>{livro.descricao}</td>
            <td>
              <EditButton onClick={() => props.prepararEdicao(livro.id)}>
                <FontAwesomeIcon icon={faEdit} /> EDITAR
              </EditButton>
              <DeleteButton onClick={() => props.prepararExclusao(livro.id)}>
                <FontAwesomeIcon icon={faTrash} /> EXCLUIR
              </DeleteButton>
            </td>
          </tr>
        ))}
      </tbody>
    </TableBook>
  );
};

export default Table;
