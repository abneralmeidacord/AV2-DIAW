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

      <section className="grade-roca" aria-label="Participantes na roça">
        {naRoca.map((p) => (
          <ParticipanteCard
            key={p.id}
            participante={p}
            onVotar={handleVotar}
          />
        ))}
      </section>

      <section className="fora-da-roca">
        <h1>Demais Peões</h1>
        <p className="pagina-descricao">
          Fora da roça nesta semana, não podem receber votos
        </p>

        <section className="grade-fora-da-roca" aria-label="Participantes fora da roça">
          {foraDaRoca.map((p) =>
            <ParticipanteCard
              key={p.id}
              participante={p}
            />)}
        </section>
      </section>


    </main>
  );
}

export default Votacao;
