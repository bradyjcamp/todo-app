import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { SettingsContext } from '../../context/settings.js';


const List = (props) => {
  

  return(
    <>
    {props.list.map(item => (
      <div key={item.id}>
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        <hr />
      </div>
    ))}

    </>
  )
}

export default List;
