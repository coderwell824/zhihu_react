import { BrowserRouter } from 'react-router-dom';
import { KeepAliveProvider } from 'keepalive-react-component';
import RouterView from '@/router';

const App = () => (
  <BrowserRouter>
    <KeepAliveProvider>
      <RouterView />
    </KeepAliveProvider>
  </BrowserRouter>
);

export default App;

// import { RouterProvider } from 'react-router-dom';
// import router from './router/index.tsx';

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
