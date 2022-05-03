import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import Form from './form.js'
import List from './list.js'
import { SettingsContext } from '../../context/settings.js';

import { v4 as uuid } from 'uuid';

const ToDo = () => {

  
  const defaultValues = {
    difficulty: 4,
  }
  
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const settings = useContext(SettingsContext);
  console.log(settings)

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} defaultValues= {defaultValues}/>
      <List toggleComplete={toggleComplete}  list={list} />

    </>
  );
};

export default ToDo;