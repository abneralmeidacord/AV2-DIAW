import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  obterVotos,
  calcularTotalVotos,
  calcularResultado,
  zerarVotos,
} from '../services/votacaoService';

function Resultado() {
  const [votos, setVotos] = useState(() => obterVotos());
  const total = calcularTotalVotos(votos);
  const resultado = calcularResultado(votos);

  function handleZerar() {
    if (window.confirm('Apagar todos os votos?')) {
      zerarVotos();
      setVotos({});
    }
  }

  return (
    <main className="pagina">
      <h1>Parcial da eliminação</h1>
      <p className="total-votos">
        <strong>{total.toLocaleString('pt-BR')}</strong>
        {' '}{total === 1 ? 'voto computado' : 'votos computados'}
      </p>

      {total === 0 ? (
        <div className="resultado-vazio">
          <p>Ainda não há votos registrados. Seja o primeiro a votar!</p>
          <Link to="/votacao" className="botao botao-principal">Ir para votação</Link>
        </div>
      ) : (
        <ol className="placar" aria-label="Resultado parcial da eliminação">
          {resultado.map((participante, indice) => (
            <li
              key={participante.id}
              className={indice === 0 ? 'placar-item placar-lider' : 'placar-item'}
            >
              <img src={participante.foto} alt={participante.nome} className="placar-foto" />
              <div className="placar-dados">
                <div className="placar-cabecalho">
                  <h2>{participante.nome}</h2>
                  {indice === 0 && <span className="selo-lider">Sairia hoje</span>}
                </div>
                <div
                  className="barra"
                  role="progressbar"
                  aria-label={`Percentual de votos de ${participante.nome}`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={participante.percentual}
                >
                  <div
                    className="barra-preenchida"
                    style={{ width: `${participante.percentual}%` }}
                  />
                </div>
                <p className="placar-votos">
                  {participante.percentual.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%
                  {' '}({participante.votos.toLocaleString('pt-BR')} {participante.votos === 1 ? 'voto' : 'votos'})
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}

      {total > 0 && (
        <button type="button" className="botao botao-zerar" onClick={handleZerar}>
          Zerar votação
        </button>
      )}
    </main>
  );
}

export default Resultado;
