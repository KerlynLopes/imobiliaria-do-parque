import { useState } from 'react'
import './PropertyDetails.css'
function PropertyDetails() {
    const fotos = [
        '/images/casa-principal.jpg',
        '/images/casa-interior.jpg',
        '/images/casa-jardim.jpg'
    ]

    const [fotoPrincipal, setFotoPrincipal] = useState(0)
    const [fotoModal, setFotoModal] = useState(0)
    const [modalAberto, setModalAberto] = useState(false)
    console.log(fotos)
console.log(fotoPrincipal)
    return (
        <main className="property-details">

            <section className="property-gallery">
                <div className="main-photo">
                    <img
                        src={fotos[fotoPrincipal]}
                        alt="Foto do imóvel"
                        onClick={() => {
                            setFotoModal(fotoPrincipal)
                            setModalAberto(true)
                        }} />
                </div>

                <div className="secondary-photos">
                    {fotos.map((foto, index) => (
                        index !== fotoPrincipal && (
                            <img
                                key={foto}
                                src={foto}
                                alt="Foto do imóvel"
                                onClick={() => {
                                    setFotoPrincipal(index)
                                    setFotoModal(index)
                                    setModalAberto(true)
                                }}
                            />
                        )
                    ))}
                </div>
            </section>
            <section className="property-info">
                <div className="property-heading">
                    <div>
                        <h1>Casa moderna com jardim</h1>
                        <p>Tristeza, Porto Alegre - RS</p>
                    </div>

                    <h2>R$ 850.000</h2>
                </div>

                <div className="property-features">
                    <span>3 quartos</span>
                    <span>2 banheiros</span>
                    <span>2 vagas</span>
                    <span>180 m²</span>
                </div>
            </section>
            {modalAberto && (
                <div className="gallery-modal">
                    <button onClick={() => setModalAberto(false)}>
                        X
                    </button>

                    <img src={fotos[fotoModal]} alt="Foto ampliada do imóvel" />
                    <div className="gallery-thumbnails">
                        {fotos.map((foto, index) => (
                            <img
                                key={foto}
                                src={foto}
                                alt="Miniatura do imóvel"
                                onClick={() => setFotoModal(index)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </main>
    )
}

export default PropertyDetails