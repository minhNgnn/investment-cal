
export default function InputField({ label, type, id }) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
        </p>
    );
}