import { useState } from 'react';
import { v4 as randomUUID } from 'uuid';
import FormStyled from '../components/FormStyled';
import Modal from '../components/Modal';
import ModalStyled from '../components/ModalStyled';

export interface LivroProps {
  id: string;
  titulo: string;
  autor: string;
  anoDePublicacao: number;
  genero: string;
  descricao: string;
  dataDeCadastro: Date | undefined;
}

const estadoInicial: LivroProps = {
  id: '',
  titulo: '',
  autor: '',
  anoDePublicacao: 0,
  genero: '',
  descricao: '',
  dataDeCadastro: undefined
};

interface modoProps {
  tipo: 'edicao' | 'exclusao';
  aberto: boolean;
}

function Home() {
  const [modo, setModo] = useState<modoProps>({ tipo: 'edicao', aberto: false });
  const [livro, setLivro] = useState<LivroProps>(estadoInicial);
  const [livros, setLivros] = useState<LivroProps[]>([]);

  function mudarEstado(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  }

  function criar() {
    if (!livro.titulo || !livro.autor || !livro.anoDePublicacao || !livro.genero || !livro.descricao) {
      alert('Todos os campos devem ser preenchidos.');
      return;
    }

    if (livro.anoDePublicacao > new Date().getFullYear()) {
      alert('O ano de publicação não pode ser no futuro.');
      return;
    }

    const novoLivro: LivroProps = {
      id: randomUUID(),
      titulo: livro.titulo,
      autor: livro.autor,
      anoDePublicacao: livro.anoDePublicacao,
      descricao: livro.descricao,
      genero: livro.genero,
      dataDeCadastro: new Date()
    };

    setLivros([...livros, novoLivro]);

    setLivro(estadoInicial);
  }

  function prepararEdicao(id: string) {
    setModo({
      tipo: 'edicao',
      aberto: true
    });

    const livroEncontrado = livros.find((item) => item.id == id);

    if (!livroEncontrado) {
      alert('ID não encontrado.');
      setModo({
        tipo: 'edicao',
        aberto: false
      });
      return;
    }

    setLivro(livroEncontrado);
  }

  function editar() {
    let copiaLista = [...livros];

    const indexEncontrado = copiaLista.findIndex((item) => item.id == livro.id);

    copiaLista[indexEncontrado].titulo = livro.titulo;
    copiaLista[indexEncontrado].autor = livro.autor;
    copiaLista[indexEncontrado].anoDePublicacao = livro.anoDePublicacao;
    copiaLista[indexEncontrado].descricao = livro.descricao;
    copiaLista[indexEncontrado].genero = livro.genero;
    copiaLista[indexEncontrado].dataDeCadastro = livro.dataDeCadastro;

    setLivros(copiaLista);
    setLivro(estadoInicial);
    setModo({
      tipo: 'edicao',
      aberto: false
    });
    setLivro(estadoInicial);
  }

  function fecharModal() {
    setModo({
      tipo: 'edicao',
      aberto: false
    });
    setLivro(estadoInicial);
  }

  return (
    <>
      {/* ANA */}
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          criar();
        }}
      >
        <div>
          <label>Título</label>
          <input type="text" value={livro.titulo} name="titulo" onChange={mudarEstado} />
        </div>

        <div>
          <label>Autor</label>
          <input type="text" value={livro.autor} name="autor" onChange={mudarEstado} />
        </div>

        <div>
          <label>Ano de publicação</label>
          <input type="number" value={livro.anoDePublicacao} name="anoDePublicacao" onChange={mudarEstado} />
        </div>

        <div>
          <label>Gênero</label>
          <input type="text" value={livro.genero} name="genero" onChange={mudarEstado} />
        </div>

        <div>
          <label>Descrição</label>
          <textarea value={livro.descricao} name="descricao" onChange={mudarEstado} />
        </div>

        <button type="submit">Enviar</button>
        <button type="button" onClick={editar}>
          salvar edição
        </button>
      </FormStyled>

      {/* rafa */}
      <table>
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Autor</th>
            <th scope="col">Ano de Publicação</th>
            <th scope="col">Genero</th>
            <th scope="col">Descricão</th>
            <th scope="col">Data de Cadastro</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>{livro.anoDePublicacao}</td>
              <td>{livro.genero}</td>
              <td>{livro.descricao}</td>
              <td>
                <button onClick={() => prepararEdicao(livro.id)}>EDITAR</button>
              </td>
              <td>
                <button>EXCLUIR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modo?.aberto && (
        <ModalStyled>
          <Modal type={modo.tipo} livro={livro} editar={editar} mudaEstado={mudarEstado} fechar={fecharModal} />
        </ModalStyled>
      )}
    </>
  );
}

export default Home;
