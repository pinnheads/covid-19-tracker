import React from 'react';
import CountUp from 'react-countup';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import styles from './Cards.module.css';

export default function Card(props) {
  const { heading, total, increase, date, time } = props;
  return (
    <div className={styles.container} id={heading}>
      <p>{heading}</p>
      <div>
        <CountUp
          className={styles.total}
          start={0}
          end={total}
          separator=','
          duration={2}
        />
      </div>
      <div id='increase' style={{ margin: '10px 0' }}>
        <TrendingUpIcon />
        <CountUp
          className={styles.new}
          start={0}
          end={increase}
          separator=','
          duration={2}
        />{' '}
        <span className={styles.increase} style={{ fontSize: '15px' }}>
          since last update
        </span>
      </div>
      <div className={styles.date} style={{ fontSize: '1.2rem' }}>
        <span className={styles.dateText}>Updated on</span> {date}
        <br />
        <span className={styles.timeText}>At</span> {time}
      </div>
    </div>
  );
}
