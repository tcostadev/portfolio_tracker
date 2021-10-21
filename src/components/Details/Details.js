import './Details.css';

const Details = (props) => {
    return (
        <section className="details">
            <ul>
                <li className="expenses">
                    <h5>Monthly Expenses</h5>
                    <label>{props.MonthlyExp}{props.currency}</label>
                </li>
                {/*                 
                <li className="expenses">
                    <h5>Annual Expenses</h5>
                    <label>{props.AnnualExp}{props.currency}</label>
                </li> 
                */}
                <li className="incomes">
                    <h5>Monthly Income</h5>
                    <label>{props.MonthlyInc}{props.currency}</label>
                </li>
                {/*
                <li className="incomes">
                    <h5>Annual Income</h5>
                    <label>{props.AnnualInc}{props.currency}</label>
                </li>
                */}
            </ul>
        </section>
    )
}

export default Details
