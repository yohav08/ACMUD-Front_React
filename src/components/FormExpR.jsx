import { useForm } from '../hooks/useForm';
import { Input } from './input.jsx';
import { Btn } from './btn.jsx';

export function FormExpR() {
    const { formData, error, setError, handleChange, resetForm } = useForm({
        nombre: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.email) {
            setError("Todos los campos son obligatorios");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("El correo no es válido");
            return;
        }

        setError("");
        alert("Información registrada correctamente ¡Gracias!");
        resetForm(); // limpia los inputs después de enviar
    };

    // Función para limpiar mediante el botón
    const handleClear = () => {
        resetForm();
    };

    return (
        <form className="formulario" onSubmit={handleSubmit}>

            <Input name="nombre" value={formData.nombre} placeholder="Nombre de usuario" onChange={handleChange} className="nombre" />
            <Input name="email" value={formData.email} placeholder="Email de usuario" onChange={handleChange} className="email" />

            {error && <p className='p-error' style={{"color": "red", "fontSize": 20}}>{error}</p>}

            <div className='submit-clear-btns'>
                <Btn type="submit" className="submit-btn"> Enviar Datos </Btn> &nbsp;
                <Btn type="button" onClick={handleClear} className="clear-btn"> Limpiar </Btn>
            </div>
        </form>
    );
}