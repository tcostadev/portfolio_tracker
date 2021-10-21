import MovementItem from './MovementItem'
import './Movements.css'

const Movements = (props) => {
    return (
        <main className="movements-list">
            {console.log(props.movements)}
            {props.movements.map((mov, index) => (
                <MovementItem key={mov.id} item={mov} currency={props.currency}/>
            ))}
        </main>
    )
}
export default Movements