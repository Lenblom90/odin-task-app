export default function Overview({tasks}) {
    return (
        <ol>
            {tasks.map((item, index) => {
                return (
                    <Task key={item.id} item={item} number={index + 1}/>
                );
            })}
        </ol>
    )
}

function Task({item, number}) {
    return (
        <li>
            {item.title}<span>
            {" (item " + number + ")"}
            </span>
        </li>
    );
}