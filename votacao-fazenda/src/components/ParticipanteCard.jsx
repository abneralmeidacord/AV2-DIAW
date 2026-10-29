
export default function ParticipanteCard({participante, onVotar}) {
    const {nome, foto, naRoca} = participante;

    return (
        <article className={naRoca ? 'card card-roca' : 'card'}>
                {naRoca && <span className="selo-roca">Na Roça</span>}
                <img />
        </article>
    )
}