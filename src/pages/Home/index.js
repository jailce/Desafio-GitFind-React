import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import background from '../../assets/background.svg';
import '../../styles.css';
const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="conteudo">
                <img src={background} className="background" alt="background" />
                <div className="info">
                    <div>
                        <Input /> <Button />
                    </div>
                    <div className="perfil"> 

                        <img src = "https://avatars.githubusercontent.com/u/8728052?v=4" className='profile-img'></img>
                        <div className="alias"> 
                        <h3>Jailce Fernanda</h3>
                        <h4>@jailce</h4>
                        <p>Web Developer, UX/UI Pro, passionate for interaction and good usability. </p>
                        </div>
                    

                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default App;
