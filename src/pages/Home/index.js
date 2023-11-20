import React from 'react'
import mapa from '../../img/mapa.png'
import './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home(){
    return (
        <div className="App">
                <Header />
    
            <div className="main">
                <div className='projeto'>
                <h1 className='titulo-projeto'>Projeto</h1>
                    <p className='intro'>
                        O site oferece uma visão abrangente das diversas unidades de saúde disponíveis na região, destacando suas especialidades, 
                        infraestrutura e equipe médica. A ideia central é fornecer informações detalhadas para que os pacientes possam tomar 
                        decisões informadas sobre para onde devem direcionar suas necessidades de saúde específicas.
                    </p>
                </div>
                <div className='mapa'>
                    <h2 className='titulo-mapa'>Mapa da Cidade</h2>
                    <img src={mapa} className="api-mapa" alt="mapa" />
                </div>
            </div>

            <Footer />
        </div>
    );
}


export default Home