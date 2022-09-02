import { Link } from 'react-router-dom';
/*-Link component 는 link 를 생성하는 역할을 함,링크 컴포넌트에 의해
렌더링 된 앵커 태그이며, 내부적으로 라우터에 반응함, 사용하는 패키지는
실제로 해당 링크의 클릭을 수신하고 브라우저 기본값을 유지하는 대신
URL을 수동으로 업데이트함,페이지를 전환하면 화면에 표시되는 내용도 바뀐
것처럼 보임, 페이지 사이를 탐색할 수 있도록 하려면 이젠 표준 앵커 태그 대신
링크 컴포넌트를 사용하면 됨*/

const Products = () => {
  return (
    <section>
      <h1>상품 페이지입니다.</h1>
      <ul>
        <li>
          <Link to="/products/p1">첫 번째 상품</Link>
        </li>
        <li>
          <Link to="/products/p2">두 번째 상품</Link>
        </li>
        <li>
          <Link to="/products/p3">세 번째 상품</Link>
        </li>
      </ul>
    </section>
  );
};
export default Products;
