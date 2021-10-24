import React from 'react';

import Header from './components/Header';
import Intro from './components/Intro';
import Speaker from './components/Speaker';
import Agenda from './components/Agenda';

import { lecture } from './models/lecture';

import clickIcon from './images/MdiCursorDefaultClick.svg';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <div className='container'>
        <section>
          <Intro></Intro>
        </section>
        <section className="no-bottom-margin">
          <h2>報名資訊與連結</h2>
          <p className='signup-notice'>
            因議程與疫情場所人數限制，A、B場分別限制80人與60人報名，報名從速，以免向隅。
          </p>
          <p className='signup-notice'>
            報名後將於11/3個別寄發通知第一波報名結果。
          </p>
          <p className='signup-notice'>
            超過限制人數將由大會協助安排至另一場次或候補。
          </p>
        </section>
        <div className='signup-button'>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSe03N4NdrUs2sjaGEyQs-_s2t-psNHBnYaIMuAPoz8qrZFR_A/viewform'
            target='_blank'
            rel='noreferrer'
          >
            <img src={clickIcon} alt='' />
            點此報名
          </a>
        </div>
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
                  <React.Fragment key={name}>
                    <Speaker name={name} exps={exps} img={img} />
                  </React.Fragment>
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
