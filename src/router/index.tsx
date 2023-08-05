import { Suspense, useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Mask, DotLoading, Toast } from 'antd-mobile';
import routes, { IRouterType } from './module';
import user from '@/store/module/user';

const isCheckLogin = (path: string) => {
  const checkList = ['/personal', '/store', '/update'];
  return !user.info && checkList.includes(path);
};

const Element = (props: IRouterType) => {
  const { component: Component, meta, path } = props;

  const isLogin = !isCheckLogin(path);
  const [_, setRandom] = useState(0);

  // 获取路由信息, 基于属性传递给组件
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(isLogin, 'isLogin');
    // if(isLogin) return
    user.queryUserInfoAsync();
    (async () => {
      console.log(user.info);
    })();
  });

  // 修改页面的title
  const { title = '知乎日报' } = meta || {};
  document.title = title;

  return (
    <>
      {isLogin ? (
        <Component navigate={navigate} location={location} searchParams={searchParams} />
      ) : (
        <Mask visible={true}>
          <DotLoading color="white" />
        </Mask>
      )}
    </>
  );
};

export default function RouterView() {
  return (
    <Suspense
      fallback={
        <Mask visible={true}>
          <DotLoading color="white" />
        </Mask>
      }
    >
      <Routes>
        {routes.map((route: IRouterType) => {
          const { name, path } = route;
          return <Route key={name} path={path} element={<Element {...route} />}></Route>;
        })}
      </Routes>
    </Suspense>
  );
}
