import InputField from "./InputField.jsx";

export default function UserInput({inputValues, handleInputChange}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <InputField label="Investment Amount:" type="number" id="investment-amount" value={inputValues["investment-amount"]} onChange={(event) => handleInputChange("investment-amount", event.target.value)} />
                <InputField label="Annual Investment:" type="number" id="annual-investment" value={inputValues["annual-investment"]} onChange={(event) => handleInputChange("annual-investment", event.target.value)} />
            </div>
            <div className="input-group">
                <InputField label="Expected Return (%):" type="number" id="expected-return" value={inputValues["expected-return"]} onChange={(event) => handleInputChange("expected-return", event.target.value)} />
                <InputField label="Duration:" type="number" id="duration" value={inputValues["duration"]} onChange={(event) => handleInputChange("duration", event.target.value)} />
            </div>
        </section>
    )
}
    