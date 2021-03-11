import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

// import bgImage1 from './images/bg1.jpg'
import bgImage2 from './images/bg2.jpg'
import bgImage3 from './images/bg3.jpg'

function App() {
  return (
   <>
    <Header title="Заголовок" descr="Описание"/>
    <Layout title="Макет 1" descr="Описание макета 1" urlBg={bgImage2} />
    <Layout title="Макет 2" descr="Описание макета 2" colorBg="DeepSkyBlue"/>
    <Layout title="Макет 3" descr="Описание макета 3" urlBg={bgImage3} />
    <Footer />
   </>
  );
}

export default App;
