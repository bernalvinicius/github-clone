import React from 'react';
import { useStyles } from './styles';
import Heatmap from 'react-calendar-heatmap';
import { subYears } from 'date-fns';

const RandomCalendar = () => {
  const classes = useStyles();
  const today = new Date();

  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomValues = getRange(400).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Heatmap
          startDate={shiftDate(today, -365)}
          endDate={today}
          values={randomValues}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-github-${value.count}`;
          }}
          tooltipDataAttrs={(value) => {
            return {
              'data-tip': `${value.date
                .toISOString()
                .slice(0, 10)} has count: ${value.count}`,
            };
          }}
          showWeekdayLabels
        />
      </div>
      <span className={classes.span}>Learn how we count contributions.</span>
    </div>
  );
};

export default RandomCalendar;
