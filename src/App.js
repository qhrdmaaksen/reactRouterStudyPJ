import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <Route path="/Welcome">{/*url 뒤에 /Welcome 의 경로가 붙을 경우에만 Welcome 표시*/}
        <Welcome />
      </Route>
      <Route path="/Products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
