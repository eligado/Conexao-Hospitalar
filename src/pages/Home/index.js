import React from 'react'
import mapa from '../../img/mapa.png'
import './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Map from '../../components/Mapa.js';


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
                    <Map/>
                </div>
            </div>

            <Footer />
        </div>
    );
}


export default Home