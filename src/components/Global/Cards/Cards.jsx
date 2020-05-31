import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

export default function Card(props) {
  const { heading, total, increase, percentIncrease } = props;
  return (
    <div className={styles.container} onC>
      <h1>{heading}</h1>
      <CountUp start={0} end={total} separator=',' duration={2.75} />
      <br />
      <CountUp start={0} end={increase} separator=',' duration={2.75} />
      <br />
      <CountUp start={0} end={percentIncrease} decimals={2} duration={2.75} />%
      <p> in last 24 hrs</p>
    </div>
  );
}
