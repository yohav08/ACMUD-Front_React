import { useState } from "react";

export function useForm(initialState = {}) {
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Función para limpiar el formulario
    const resetForm = () => {
        setFormData(initialState);
        setError("");
    };

    return {
        formData,
        error,
        setError,
        handleChange,
        resetForm,
        setFormData
    };
}