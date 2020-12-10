import List from './List';
import Input from './Input';
import React, { useState } from 'react';

function FruitContainer(props) {

    const fruitsToDisplay = props.fruits
  const [fruits, setFruits] = useState(props.fruits);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {

    e.preventDefault();
    let filter = e.target.value;

    const filteredFruitList = props.fruits.filter((fruit) =>
      fruit.toLowerCase().includes(filter.toLowerCase())
    );



    setFilter(filter)
    setFruits(filteredFruitList)

  };

  return (
    <div>
      <ul>
        <Input value = {filter} onChange={handleFilterChange} />
        <List fruits={fruits} />
      </ul>
    </div>
  );
}

export default FruitContainer;
