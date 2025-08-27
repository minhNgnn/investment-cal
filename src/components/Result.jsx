import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Result({input}) {
    const initialInvestment = +input.investmentAmount; 
    
    const annualData = calculateInvestmentResults({
        initialInvestment: initialInvestment,
        annualInvestment: +input.annualInvestment, 
        expectedReturn: +input.expectedReturn,
        duration: +input.duration
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
                    const totalInterest = data.valueEndOfYear - (initialInvestment + data.annualInvestment * data.year);
                    const totalAmountInvested = initialInvestment + (data.annualInvestment * data.year);
                    
                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};