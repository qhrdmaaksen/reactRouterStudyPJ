import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          {/*url 뒤에 /Welcome 의 경로가 붙을 경우에만 Welcome 표시*/}
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
