import { Link } from 'react-router-dom';

export default function NotFounded() {
  return (
    <>
      <div>Что-то пошло не так. Данной страницы не существует</div>
      <Link to="/">Back to main page</Link>
    </>
  );
}
