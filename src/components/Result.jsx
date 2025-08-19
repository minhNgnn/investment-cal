

export default function Result({ investment, annualInvestment, expectedReturn, duration }) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {/* Render the calculated results here */}
            </tbody>
        </table>

    )
}