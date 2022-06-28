import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';

class Form extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00",
  }

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    return (
      <form action="" className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(event) => this.setState({ ...this.state, tarefa: event.target.value })}
            id="tarefa"
            placeholder="O que você quer estudar?"
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            id="tempo"
            name="tempo"
            value={this.state.tempo}
            onChange={(event) => this.setState({ ...this.state, tempo: event.target.value })}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        
        <Button>Adicionar</Button>
      </form>
    );
  }
}

export default Form;