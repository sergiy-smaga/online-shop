import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGIN from '../../login';
import useLoggingSlice from '../../redux/userSlice';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose }) => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);

  const { handleLogging } = useLoggingSlice();

  const handleSubmit = e => {
    e.preventDefault();
    const { login, password } = e.target.elements;

    if (login.value !== LOGIN.login || password.value !== LOGIN.password) {
      setIsError(true);
    } else {
      onClose();
      handleLogging(login.value);
      navigate('/', { replace: true });
    }
    e.target.reset();
  };

  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.close} onClick={onClose}>
          x
        </button>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>
            Логин
            <input className={css.input} name="login" type="text" />
          </label>
          <label className={css.label}>
            Пароль
            <input className={css.input} name="password" type="text" />
          </label>
          {isError && (
            <p className={css.error}>
              Введен недействительный логин и/или пароль
            </p>
          )}
          <div className={css.wrapper}>
            <button className={css.button} type="submit">
              Войти
            </button>
            <button className={css.button} onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};
