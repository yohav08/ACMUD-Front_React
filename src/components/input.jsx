// Input reutilizable - Tarea 3
export function Input({ 
    type = "text", 
    name, 
    value, 
    placeholder, 
    onChange, 
    className = "" 
}) {
    return (
        <input 
            type={type} 
            className={className} 
            name={name} 
            value={value}
            placeholder={placeholder} 
            onChange={onChange} 
        />
    );
}