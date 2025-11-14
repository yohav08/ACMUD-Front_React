// Counter - Tarea 1

export function Btn_1({ onClick, name }) {
    return (
        <button onClick={onClick} className="btn">
            {name}
        </button>
    );
}
