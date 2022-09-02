import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            {/*url 뒤에 /Welcome 의 경로가 붙을 경우에만 Welcome 표시*/}
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          {/*-동적 라우트 path /example/:productId 로 :동적경로 세그먼트로 이페이지가 로드되어야하는 전체 경로는 다음과 같을거라고 라우터에게 알려주는것*/}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
