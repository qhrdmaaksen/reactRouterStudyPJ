import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*-앱을 문서 요소로 렌더링하는 루트 파일로 이동해서 react-router-dom 에서
제공하는 BrowserRouter 컴포넌트를 가져와서 전체 앱을 래핑해줘하며 래핑하면
리액트 라우터가 활성화 되며 경로 정의와 같은 리액트 라우터 기능 잠금해제됨*/
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
