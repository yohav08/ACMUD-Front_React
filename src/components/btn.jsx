export function Btn({ onClick, children, className, type = "button" }) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    );
}