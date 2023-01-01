
export default function Joke(props) {
    return (
        <div>
            {props.setup && <h4> Setup: {props.setup}</h4>}
            <p>{props.punchline}</p>
            <hr />
        </div>
    )
}