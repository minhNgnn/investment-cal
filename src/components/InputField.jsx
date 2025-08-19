
export default function InputField({ label, type, id, ...rest }) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} {...rest} />
        </p>
    );
}
