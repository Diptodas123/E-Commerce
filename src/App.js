import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from "./GlobalStyle";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import Cart from './Components/Cart/Cart';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LoadingBar from 'react-top-loading-bar';
import { useTopLoaderContext } from './Context/TopLoaderContext';
import PaymentSuccess from './Components/PaymentSuccess';
import PaymentCancel from './Components/PaymentCancel';

function App() {

  const {topLoaderProgress}=useTopLoaderContext();
  
  const theme = {
    colors: {
      heading: "rgb(24, 24, 29)",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98, 84, 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg,rgb(132,144,255) 0%, rgb(98, 189, 252) 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <LoadingBar
        color='rgb(98, 84, 243)'
        progress={topLoaderProgress}
        height={5}
      />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/singleproduct/:id' element={<SingleProduct />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/success' element={<PaymentSuccess />}></Route>
        <Route path='/cancel' element={<PaymentCancel />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
