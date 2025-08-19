import InputField from "./InputField.jsx";
    
export default function UserInput() {
    return (
        <section id="user-input">
            <div className="input-group">
                <InputField label="Investment Amount:" type="number" id="investment-amount" />
                <InputField label="Annual Investment:" type="number" id="annual-investment" />
            </div>
            <div className="input-group">
                <InputField label="Expected Return (%):" type="number" id="expected-return" />
                <InputField label="Duration:" type="number" id="duration" />
            </div>
        </section>
    )
}
    