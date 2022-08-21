import style from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout.jsx';
import Catalogue from '../pages/Catalogue';

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Catalogue />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path=":itemId" element={<ItemDetails />} /> */}
          {/* <Route path="*" element={<NorFounded />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
