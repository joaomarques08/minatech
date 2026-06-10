import "./Programacao.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import vrImage from "../assets/img/programacao/vr.png"
import { useState } from "react"

export default function Programacao() {

    const eventos = [
        {
            id: 1,
            data: "01/05",
            dia: "Sábado",
            descricao: "Rodas de conversa",
            imagem: vrImage,
            alimentacao: "Coffee Break",
            local: "Sebrae HUB — SC 401",
            horario: "13:45 às 17:45"
        },
        {
            id: 2,
            data: "15/05",
            dia: "Domingo",
            descricao: "Workshop de IA",
            imagem: vrImage,
            alimentacao: "Coffee Break",
            local: "Auditório Principal",
            horario: "14:00 às 18:00"
        },
        {
            id: 3,
            data: "28/05",
            dia: "Sexta",
            descricao: "Palestras",
            imagem: vrImage,
            alimentacao: "Coffee Break",
            local: "Sala 02",
            horario: "19:00 às 22:00"
        },
        {
            id: 4,
            data: "28/05",
            dia: "Sexta",
            descricao: "Palestras",
            imagem: vrImage,
            alimentacao: "Coffee Break",
            local: "Sala 02",
            horario: "19:00 às 22:00"
        },
        {
            id: 5,
            data: "28/05",
            dia: "Sexta",
            descricao: "Palestras",
            imagem: vrImage,
            alimentacao: "Coffee Break",
            local: "Sala 02",
            horario: "19:00 às 22:00"
        }
    ]

    const [eventoSelecionado, setEventoSelecionado] = useState(eventos[0])

    return (
        <div className="programacao-page">

            <Navbar />

            <main className="container programacao-content">

                <section className="sidebar-programacao">

                    <h1>Programação</h1>
                    <p>Data de todos os eventos</p>

                    <div className="eventos-lista">

                        {eventos.map((evento) => (

                            <div
                                key={evento.id}
                                className={`evento-card ${eventoSelecionado.id === evento.id
                                    ? "ativo"
                                    : ""
                                    }`}
                                onClick={() => setEventoSelecionado(evento)}
                            >

                                <div>
                                    <h3>{evento.data}</h3>

                                    <p>
                                        {evento.descricao}
                                    </p>
                                </div>

                                <img
                                    src={evento.imagem}
                                    alt={evento.descricao}
                                />

                            </div>

                        ))}

                    </div>

                </section>

                <section className="evento-detalhes">

                    <img
                        src={eventoSelecionado.imagem}
                        alt=""
                        className="imagem-evento"
                    />

                    <div className="infos-evento">

                        <h2>{eventoSelecionado.dia}</h2>

                        <span>
                            {eventoSelecionado.data}/2026
                        </span>

                        <div className="info-box">
                            <h4>Tema</h4>
                            <p>{eventoSelecionado.descricao}</p>
                        </div>

                        <div className="info-box">
                            <h4>Alimentação</h4>
                            <p>{eventoSelecionado.alimentacao}</p>
                        </div>

                        <div className="info-box">
                            <h4>Local</h4>
                            <p>{eventoSelecionado.local}</p>
                        </div>

                        <div className="info-box">
                            <h4>Horário</h4>
                            <p>{eventoSelecionado.horario}</p>
                        </div>

                    </div>

                </section>

            </main>

            <Footer />

        </div>
    )
}