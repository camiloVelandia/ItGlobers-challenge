import React, { useRef, useContext, useState } from 'react';
import PageContext from '../context/PageContext';
import '../styles/components/Form.css';
import Modal from './Modal';

const Form = () => {
  const menuItemActive = useContext(PageContext);
  const form = useRef(null);
  const range = [];
  const [open, setopen] = useState(false);

  for (let i = 18; i <= 100; i++) {
    const number = i;
    range.push(number);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const info = {
      name: formData.get('nombre'),
      email: formData.get('email'),
      celular: formData.get('celular'),
      edad: formData.get('edad'),
    };
    console.log(info);
    setopen(true);
  };

  return (
    <section className="form">
      <h1 className="form__head">
        Hola, bienvenido, sabemos que quieres viajar en {menuItemActive.menu},
        por favor diligencia el siguiente formulario:
      </h1>
      <form className="form__container" ref={form} onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="nombre">Nombre completo</label>
          <input type="text" name="nombre" id="nombre" required />
        </div>

        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className="form__group">
          <label htmlFor="celular">Celular</label>
          <input type="number" name="celular" id="celular" required />
        </div>

        <div className="form__group">
          <label htmlFor="edad">Edad</label>
          <select name="" name="edad" id="edad" required>
            <option value="">seleccione edad</option>
            {range.map(number => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>

        {/* <input className="form__submit" type="submit" value="Enviar" /> */}
        <Modal type="submit" value="Enviar" send={open} />
      </form>
    </section>
  );
};

export default Form;
