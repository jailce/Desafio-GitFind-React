import './styles.css';

const Button = ({onClick}) => {
    return (
        <button onClick={onClick}  >
           Buscar
        </button>
    );
};

export { Button };
