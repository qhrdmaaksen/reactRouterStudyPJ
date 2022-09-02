import { useParams } from 'react-router-dom';
/*-useParams 특수 훅 : UseParams를 호출하면 훅은 상수에 저장할 수 있는
params 객체를 반환함,키값 쌍을 가지게 되는데 페이지로 연결되는 동적
세그먼트인 키를 의미하며 필요한 경우 여러 세그먼트를 가질 수 있음*/

const ProductDetail = () => {
  const params = useParams();
  console.log('PD :::', params.productId);

  return (
    <section>
      <h1>상품 상세 페이지 입니다.</h1>
      <p>{params.productId}</p>
    </section>
  );
};
export default ProductDetail;
