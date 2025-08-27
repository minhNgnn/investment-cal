import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Result({input}) {
    const annualData = calculateInvestmentResults({
        initialInvestment: input["investment-amount"],
        annualInvestment: input["annual-investment"], 
        expectedReturn: input["expected-return"],
        duration: input["duration"]
    });
    
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
                {annualData.map(data => {
                    const totalInterst = data.valueEndOfYear - data.annualInvestment * data.year - input["investment-amount"]
                    const totalAmountInvested = data.valueEndOfYear - totalInterst
                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterst)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                }
                    
                )}

            </tbody>
        </table>
    )
};