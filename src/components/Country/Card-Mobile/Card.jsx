import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

export default function Card(props) {
  const {
    props: { country, total, deaths, recovered, active, date, time },
  } = props;
  return (
    <div className={styles.container} id='mobile-only'>
      <div id='mobile-container'>
        <p>{country}</p>
        <div id='internal'>
          <span className={styles.text}>Total: </span>
          <CountUp
            className={styles.total}
            start={0}
            end={total}
            separator=','
            duration={2}
          />
          <br />
          <span className={styles.text}>Active: </span>
          <CountUp
            className={styles.total}
            start={0}
            end={active}
            separator=','
            duration={2}
          />
          <br />
          <span className={styles.text}>Deaths: </span>
          <CountUp
            className={styles.total}
            start={0}
            end={deaths}
            separator=','
            duration={2}
          />
          <br />
          <span className={styles.text}>Recovered: </span>
          <CountUp
            className={styles.total}
            start={0}
            end={recovered}
            separator=','
            duration={2}
          />
        </div>
        <div className={styles.date} style={{ fontSize: '1.2rem' }}>
          <span className={styles.dateText}>Updated on </span>
          {date} <br />
          <span className={styles.timeText}>At </span>
          {time}
        </div>
      </div>
    </div>
  );
}
