import React, { useState } from 'react';
import { Item } from './components/Item';
import style from './List.module.scss';

export function List() {
  const [ tarefas, setTarefas ] = useState([
    {
      tarefa: 'React',
      tempo: '02:00:00',
    }, {
      tarefa: 'Javacript',
      tempo: '01:00:00',
    },
    {
      tarefa: 'Typescript',
      tempo: '03:00:00',
    }
  ]);



  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}