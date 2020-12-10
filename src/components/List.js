function List(props) {

    const fruitItems = props.fruits.map((fruit,i) => <li>{fruit}</li>)
  return (
    <div>
        <ul>

            {fruitItems}
        </ul>

    </div>
  );
}

export default List;
