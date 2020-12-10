function Input(props) {
  return (
    <div>
      <label htmlFor="fruit-filter">Filter these Fruit:</label>
      <input type="text"  value={props.value} name="fruit-filter" onChange = {props.onChange} />
    </div>
  );
}

export default Input;
