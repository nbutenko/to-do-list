export default function Task(props) {
    return (
        <li className="list-group-item list-group-item-action" key={props.key}>{props.name}</li>
    )
}