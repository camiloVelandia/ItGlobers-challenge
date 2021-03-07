import React, { useContext } from 'react';
import PageContext from '../context/PageContext';

const Form = () => {
  const menuItemActive = useContext(PageContext);
  const range = [];

  for (let i = 18; i <= 100; i++) {
    const number = i;
    range.push(number);
  }

  return (
    <section>
      <h1>
        Hola, bienvenido, sabemos que quieres viajar en {menuItemActive.menu},
        por favor diligencia el siguiente formulario:
      </h1>
      <form>
        <label htmlFor="nombre">Nombre completo</label>
        <input type="text" name="nombre" id="nombre" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="celular">Celular</label>
        <input type="number" name="celular" id="celular" />
        <label htmlFor="edad">Edad</label>
        <select name="" name="edad" id="edad">
          {range.map(number => (
            <option key={number}>{number}</option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Form;
