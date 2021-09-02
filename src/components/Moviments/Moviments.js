import MovimentItem from './MovimentItem'
import './Moviments.css'

const Moviments = (props) => {
    return (
        <main className="moviments-list">
            {console.log(props.moviments)}
            {props.moviments.map((mov, index) => (
                <MovimentItem key={mov.id} item={mov} currency={props.currency}/>
            ))}
        </main>
    )
}
export default Moviments