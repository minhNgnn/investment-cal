import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Result({input}) {
    const annualData = calculateInvestmentResults({
        initialInvestment: input["investment-amount"],
        annualInvestment: input["annual-investment"], 
        expectedReturn: input["expected-return"],
        duration: input["duration"]
    });
    
    console.log(annualData);
    // console.log("Test")
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
                {annualData.map(data => 
                    (
                        <tr>
                            <th>{data.year}</th>
                            <th>{data.interest}</th>
                            <th>{data.valueEndOfYear}</th>
                            <th>{data.annualInvestment}</th>
                        </tr>
                    )
                )}

            </tbody>
        </table>
    )
};