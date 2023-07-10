import Notification from "components/Notification/Notification";



const Statistics = ({ good, neutral, bad, positiv, total }) => {
    if (total === 0) {
        return <Notification massage = "There is no feedback" />
    }    

    return <div>
        <h5>Good : {good}</h5>
        <h5>Neutral : {neutral}</h5>
        <h5>Bad : {bad}</h5>
        <h5>Total : {total}</h5>
        <h5>Positiv feedback : {positiv}%</h5>
    </div>
}
 
export default Statistics;