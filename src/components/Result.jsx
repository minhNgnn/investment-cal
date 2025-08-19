// import {investment} from '../util/investment.js';

export default function Result() {
    // const annualData = investment.calculateAnnualData(annualInvestment, expectedReturn, duration);
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
                {/* <tr>{annualData}</tr> */}
            </tbody>
        </table>
    )
};