import Header from './components/Header';
import Speaker from './components/Speaker';
// import Footer from './components/Footer/Footer';

// import moduleName from './style';

import { lecture_1A } from './models/lecture';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <div className='container'>
        <section>
          <h2>最新消息</h2>
          <h2>研討議程</h2>
          <h2>講者介紹</h2>
          <div className='speakers'>
            {lecture_1A.map(({ name, exps, img }) => (
              <Speaker name={name} exps={exps} img={img} />
            ))}
          </div>
        </section>
      </div>

      {/* <img src='./images/lecture/A/1A/hcl.png' alt='' /> */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
