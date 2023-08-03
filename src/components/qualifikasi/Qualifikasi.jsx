import './qualifikasi.css';
import { useState } from 'react';

const Qualifikasi = () => {
  const [toggle, setToggle] = useState(0);

  const handleTonggle = (item) => {
    setToggle(item);
  };
  return (
    <section className="qualifikasi section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualifikasi__container container">
        <div className="qualifikasi__tabs">
          <div
            className={`qualifikasi__button button__flex ${
              toggle === 1 ? 'qualifikasi__active' : ''
            }`}
            onClick={() => handleTonggle(1)}
          >
            <i className="uil uil-graduation-cap qualifikasi__icon"></i>{' '}
            Education
          </div>
          <div
            className={`qualifikasi__button button__flex ${
              toggle === 2 ? 'qualifikasi__active' : ''
            }`}
            onClick={() => handleTonggle(2)}
          >
            <i className="uil uil-briefcase-alt qualifikasi__icon"></i>{' '}
            Experience
          </div>
        </div>
        <div className="qualifikasi__sections">
          <div
            className={`qualifikasi__content ${
              toggle === 1 ? 'qualifikasi__content-active' : ''
            }`}
          >
            <div className="qualifikasi__data">
              <div>
                <h3 className="qualifikasi__title">University</h3>
                <span className="qualifkasi__subtitle">
                  Universitas Islam Riau
                </span>
                <div className="qualifikasi__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019-Present
                </div>
              </div>
              <div>
                <span className="qualifikasi__rounder"></span>
                <span className="qualifikasi__line"></span>
              </div>
            </div>
            <div className="qualifikasi__data">
              <div></div>
              <div>
                <span className="qualifikasi__rounder"></span>
                <span className="qualifikasi__line"></span>
              </div>
              <div>
                <h3 className="qualifikasi__title">High Scholl</h3>
                <span className="qualifkasi__subtitle">
                  SMK Negeri 6 Pekanbaru
                </span>
                <div className="qualifikasi__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018-2019
                </div>
              </div>
            </div>

            <div className="qualifikasi__data">
              <div>
                <h3 className="qualifikasi__title">Junio High School</h3>
                <span className="qualifkasi__subtitle">
                  SMP Negeri 26 Pekanbaru
                </span>
                <div className="qualifikasi__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021-2022
                </div>
              </div>
              <div>
                <span className="qualifikasi__rounder"></span>
                <span className="qualifikasi__line"></span>
              </div>
            </div>
            <div className="qualifikasi__data">
              <div></div>
              <div>
                <span className="qualifikasi__rounder"></span>
                <span className="qualifikasi__line"></span>
              </div>
              <div>
                <h3 className="qualifikasi__title">Elementali School</h3>
                <span className="qualifkasi__subtitle">
                  SD Negeri 6 Pekanbaru
                </span>
                <div className="qualifikasi__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018-2019
                </div>
              </div>
            </div>
          </div>

          <div
            className={`qualifikasi__content ${
              toggle === 2 ? 'qualifikasi__content-active' : ''
            }`}
          >
            <div className="qualifikasi__data">
              <div>
                <h3 className="qualifikasi__title">Magang</h3>
                <span className="qualifkasi__subtitle">BPS</span>
                <div className="qualifikasi__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021-Present
                </div>
              </div>
              <div>
                <span className="qualifikasi__rounder"></span>
                <span className="qualifikasi__line"></span>
              </div>
            </div>
            <div className="qualifikasi__data">
              <div></div>
              <div>
                <span className="qualifikasi__rounder"></span>
                <span className="qualifikasi__line"></span>
              </div>
              <div>
                <h3 className="qualifikasi__title">Magang</h3>
                <span className="qualifkasi__subtitle">Telkomsel - RAM</span>
                <div className="qualifikasi__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018-2019
                </div>
              </div>
            </div>

            <div className="qualifikasi__data">
              <div>
                <h3 className="qualifikasi__title">Daily Worker</h3>
                <span className="qualifkasi__subtitle">
                  Transmart - Pekanbaru
                </span>
                <div className="qualifikasi__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021-2022
                </div>
              </div>
              <div>
                <span className="qualifikasi__rounder"></span>
                <span className="qualifikasi__line"></span>
              </div>
            </div>
            <div className="qualifikasi__data">
              <div></div>
              <div>
                <span className="qualifikasi__rounder"></span>
                <span className="qualifikasi__line"></span>
              </div>
              <div>
                <h3 className="qualifikasi__title">Magang</h3>
                <span className="qualifkasi__subtitle">Telkomsel - RAM</span>
                <div className="qualifikasi__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018-2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifikasi;
