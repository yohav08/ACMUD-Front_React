export function Btn({ onClick, name }) {
    return (
        <button onClick={onClick} className="btn">
            {name}
        </button>
    );
}
