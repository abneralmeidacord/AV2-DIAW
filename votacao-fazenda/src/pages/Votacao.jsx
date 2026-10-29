import { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticipanteCard from '../components/ParticipanteCard';
import {
  listarNaRoca,
  listarForaDaRoca,
  registrarVoto,
} from '../services/votacaoService';

function Votacao() {
  const [ultimoVoto, setUltimoVoto] = useState(null);
  const [votosNaSessao, setVotosNaSessao] = useState(0);
  const naRoca = listarNaRoca();
  const foraDaRoca = listarForaDaRoca();

  function handleVotar(participante) {
    registrarVoto(participante.id)

  }

  return (
    <main className="pagina votacao">
      <h1>Quem você quer eliminar?</h1>
      <p className="pagina-descricao">
        Cada clique conta um voto para tirar o peão da fazenda.
      </p>

      {naRoca.map((p) => (
        <ParticipanteCard
          key={p.id}
          participante={p}
          onVotar={handleVotar}
        />
      ))}

      {foraDaRoca.map((p) =>
      <ParticipanteCard
        key={p.id}
        participante={p}
      />)}
    </main>
  );
}

export default Votacao;
