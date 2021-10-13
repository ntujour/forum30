import Header from './components/Header';
import Speaker from './components/Speaker';
import Agenda from './components/Agenda';
// import Footer from './components/Footer/Footer';

// import moduleName from './style';

import { lecture_A, lecture_B } from './models/lecture';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <div className='container'>
        {/* <section>
          <h2>最新消息</h2>
        </section> */}
        <section>
          <h2>研討議程</h2>
          <Agenda></Agenda>
        </section>
        <section>
          <h2>講師介紹</h2>
          {lecture_A.map(({ title, speakers }) => (
            <div className='lecture-intro' key={title}>
              <h3>{title}</h3>
              <div className='speakers'>
                {speakers.map(({ name, exps, img }) => (
                  <Speaker name={name} exps={exps} img={img} key={name} />
                ))}
              </div>
            </div>
          ))}
          {lecture_B.map(({ title, speakers }) => (
            <div className='lecture-intro' key={title}>
              <h3>{title}</h3>
              <div className='speakers'>
                {speakers.map(({ name, exps, img }) => (
                  <Speaker name={name} exps={exps} img={img} key={name} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
