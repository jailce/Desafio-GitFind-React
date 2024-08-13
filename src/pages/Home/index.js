import { useState } from 'react';
import { Header } from '../../components/Header';

import { Button } from '../../components/Button';
import { ItemList } from '../../components/ItemList';
import background from '../../assets/background.svg';
import '../../styles.css';
const App = () => {
    const [user, setUser] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [repos, setRepos] = useState(null);

    const handleGetData = async () => {
        const userData = await fetch(`https://api.github.com/users/${user}`);
        const newUser = await userData.json();

        if (newUser.name) {
            const { avatar_url, name, bio } = newUser;
            setCurrentUser({ avatar_url, name, bio });

            const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
            const newRepos = await userData.json();

            if (newRepos.length) {
                setRepos(newRepos);
            }
        }
    };

    return (
        <div className="App">
            <Header />
            <div className="conteudo">
                <img src={background} className="background" alt="background" />
                <div className="info">
                    <div className="pesquisa">
                        <input
                            name="usuario"
                            value={user}
                            onChange={(event) => setUser(event.target.value)}
                            placeholder="@username"
                        />
                        <Button onClick={handleGetData} />
                    </div>
                    {currentUser?.name ? (
                        <>
                            <div className="perfil">
                                <img
                                    src="https://avatars.githubusercontent.com/u/8728052?v=4"
                                    className="profile-img"
                                ></img>
                                <div className="alias">
                                    <h3>Jailce Fernanda</h3>
                                    <h4>@jailce</h4>
                                    <p>
                                        Web Developer, UX/UI Pro, passionate for interaction and
                                        good usability.
                                    </p>
                                </div>
                            </div>
                            <hr />
                        </>
                    ) : null}
                    <div>
                        <h2>Repositórios</h2>
                        <ItemList title="teste" description="teste descr" />
                        <ItemList title="teste" description="teste descr" />
                        <ItemList title="teste" description="teste descr" />
                        <ItemList title="teste" description="teste descr" />
                        <ItemList title="teste" description="teste descr" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
