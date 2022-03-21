import './globalStyle.css'
import StickerOptions from './Components/StickerOptions/StickerOp'
import StickerQtd from './Components/StickerQtd/StickerQtd'
import Obs from './Components/Obs/Obs'

function App() {
  return (
    <div className="App">
        <div>
            <div className="wrapper">
                <header>
                    <div className="header-title"><h1 className="title">Formulário para compra de <strong>
                        Pacote de adesivos</strong></h1>
                    </div>
                    <div className="header-img">
                        <img className="img-header" src="https://cdn-icons-png.flaticon.com/512/1067/1067555.png" alt="package icon"></img>
                    </div>
                </header>
                <h3>Escolha seus adesivos:</h3>
                <StickerOptions />
                <h3>Quantos adesivos de cada?</h3>
                <StickerQtd />
                <h3>Observações:</h3>
                <Obs />
                <footer>
                    <button className="footer">Enviar</button>
                </footer>
            </div>
        </div>
    </div>
  );
}

export default App;
