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
                    <h5>Anual Expenses</h5>
                    <label>{props.AnualExp}{props.currency}</label>
                </li> 
                */}
                <li className="incomes">
                    <h5>Monthly Income</h5>
                    <label>{props.MonthlyInc}{props.currency}</label>
                </li>
                {/*
                <li className="incomes">
                    <h5>Anual Income</h5>
                    <label>{props.AnualInc}{props.currency}</label>
                </li>
                */}
            </ul>
        </section>
    )
}

export default Details
