export default function Overview({tasks}) {
    return (
        <ol>
            {tasks.map(item => {
                return (
                    <Task key={item.id} item={item}/>
                );
            })}
        </ol>
    )
}

function Task({item}) {
    return (
        <li>
            {item.title}
        </li>
    );
}