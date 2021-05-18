import './Details.css';

const Details = (props) => {
    return (
        <section className="details">
            <ul>
                <li className="expenses">
                    <h4>Monthly Expenses</h4>
                    <label>{props.MonthlyExp}</label>
                </li>
                <li className="expenses">
                    <h4>Anual Expenses</h4>
                    <label>{props.MonthlyExp}</label>
                </li>
                <li className="incomes">
                    <h4>Monthly Income</h4>
                    <label>{props.MonthlyInc}</label>
                </li>
                <li className="incomes">
                    <h4>Anual Income</h4>
                    <label>{props.AnualInc}</label>
                </li>
            </ul>
        </section>
    )
}



export default Details
