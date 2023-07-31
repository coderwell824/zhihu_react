import { BrowserRouter } from "react-router-dom";
import { KeepAliveProvider } from "keepalive-react-component";
import RouterView from  "@/router"

const App = () => {
  return (
    <BrowserRouter>
      <KeepAliveProvider>
        <RouterView/>
      </KeepAliveProvider>
    </BrowserRouter>
  );
};

export default App;
