import "./Home.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className="page-container">
            <Navbar />

            <main className="content">
                <div id="manchete">
            <div>
                <h2 id="manchete-opener">⸺ Jornada Minatech · Florianópolis</h2>
                <h1>Tecnologia <br /> feita por <span id="manchete-destaque">meninas, <br /> para meninas</span></h1>
            </div>
            </div>
            </main>

            <Footer />
        </div>
    )
}