import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import routes from './routes';

import './style.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, component: Component }, i) => (
          <Route key={i} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
