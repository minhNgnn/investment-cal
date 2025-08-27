import InputField from "./InputField.jsx";

export default function UserInput({inputValues, handleInputChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <InputField label="Investment Amount:" type="number" id="investment-amount" value={inputValues.investmentAmount} onChange={(event) => handleInputChange("investmentAmount", event.target.value)} />
                <InputField label="Annual Investment:" type="number" id="annual-investment" value={inputValues.annualInvestment} onChange={(event) => handleInputChange("annualInvestment", event.target.value)} />
            </div>
            <div className="input-group">
                <InputField label="Expected Return (%):" type="number" id="expected-return" value={inputValues.expectedReturn} onChange={(event) => handleInputChange("expectedReturn", event.target.value)} />
                <InputField label="Duration:" type="number" id="duration" value={inputValues.duration} onChange={(event) => handleInputChange("duration", event.target.value)} />
            </div>
        </section>
    )
}
    