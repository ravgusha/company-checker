import { Routes, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';

import routes from './routes';

import './style.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {routes.map(({ path, component: Component }, i) => (
        <Route key={i} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

export default App;
