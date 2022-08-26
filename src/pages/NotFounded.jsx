import { Link } from 'react-router-dom';

export default function NotFounded() {
  return (
    <>
      <h3 style={{ marginBottom: 20 }}>
        Что-то пошло не так. Данной страницы не существует
      </h3>
      <Link
        style={{
          backgroundColor: '#bbb',
          padding: 10,
          borderRadius: 5,
          color: '#fff',
        }}
        to="/"
      >
        Back to main page
      </Link>
    </>
  );
}
