import { useState } from 'react';
import { v4 as randomUUID } from 'uuid';
import FormStyled from '../components/FormStyled';
import Table from '../components/Table';
import Modal from '../components/modal/Modal';
import ModalStyled from '../components/modal/ModalStyled';

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
  const [indexEncontrado, setIndexEncontrado] = useState(0);

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

  function prepararExclusao(id: string) {
    setModo({
      tipo: 'exclusao',
      aberto: true
    });

    setIndexEncontrado(livros.findIndex((item) => item.id == id));
  }

  function excluir() {
    const copiaLista = [...livros];

    if (indexEncontrado != -1) {
      copiaLista.splice(indexEncontrado, 1);
      setLivros(copiaLista);
    }

    setModo({
      tipo: 'edicao',
      aberto: false
    });
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
      </FormStyled>

      {/* rafa */}
      <Table livros={livros} prepararEdicao={prepararEdicao} prepararExclusao={prepararExclusao} />

      {modo?.aberto && (
        <ModalStyled>
          <Modal
            excluir={excluir}
            type={modo.tipo}
            livro={livro}
            editar={editar}
            mudaEstado={mudarEstado}
            fechar={fecharModal}
          />
        </ModalStyled>
      )}
    </>
  );
}

export default Home;
