import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';
import Menu from '../components/Menu';
import Header from '../components/Header';
import routes from './routes';

import './style.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Menu />
      <Routes>
        {routes.map(({ path, component: Component }, i) => (
          <Route key={i} path={path} element={<Component />} />
        ))}
      </Routes>
    </Provider>
  );
}

export default App;
