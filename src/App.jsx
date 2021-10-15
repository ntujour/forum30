import Header from './components/Header';
import Intro from './components/Intro';
import Speaker from './components/Speaker';
import Agenda from './components/Agenda';

import { lecture } from './models/lecture';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <div className='container'>
        <section>
          <Intro></Intro>
        </section>
        <section>
          <h2>報名資訊與連結</h2>
          <p className='signup-reminder'>
            預計10/25開放報名，報名人數因疫情將分A、B場報名，各有人數限制，請密切關注本站以獲得最新報名資訊。
          </p>
        </section>
        <section>
          <h2>研討議程</h2>
          <Agenda></Agenda>
        </section>
        <section>
          <h2>講師介紹</h2>
          {lecture.map(({ title, speakers }) => (
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
