import React from 'react';
import useForm from '../../hooks/form.js';
import { useContext } from 'react';
import { SettingsContext } from '../../context/settings.js';

const Form = (props) => {

  const settings = useContext(SettingsContext)

  return(

    <form onSubmit={props.handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={props.handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={props.handleChange} defaultValue={props.defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
  )
}

export default Form;