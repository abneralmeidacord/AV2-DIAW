import ParticipanteCard from '../components/ParticipanteCard';

export default function Teste() {
    return (
        <main className="home">
            <ParticipanteCard
                key={1}
                participante={{ nome: 'Adryana Ribeiro', foto: '/participantes/adryana-ribeiro.jpg', naRoca: true }}
            />
        </main>
    )
}
