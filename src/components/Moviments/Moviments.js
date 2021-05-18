import MovimentItem from './MovimentItem'

const Moviments = (props) => {
    return (
        <main className="moviments-list">
            {console.log(props.moviments)}
            {props.moviments.map((mov, index) => (
                <MovimentItem key={mov.id} item={mov}/>
            ))}
        </main>
    )
}
export default Moviments