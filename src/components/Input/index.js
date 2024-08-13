import './styles.css';

const Input = ({name}, {value}, {onChange}) => {
    return (
        <input name={name} value={value} onChange={onChange} placeholder="@username" />
    
      
    );
};

export { Input };
