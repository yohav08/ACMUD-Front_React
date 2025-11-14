// Counter con adelantar y atrasar - Tarea 2
export function Btn({ onClick, children, className }) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}