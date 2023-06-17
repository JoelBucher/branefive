import { useEffect, useState } from "react";
import { Text } from '@mantine/core';
import { EventType } from "../types/EventType";
import { useNewsletterStyle } from "../../Newsletter/hooks/useNewsletterStyle";

interface EventParameter {
  deadline: EventType
}

function leadingZero(num : number){
  return num < 10 ? "0" + num : num;
}

export function TourCountdown(param : EventParameter) {
  const { classes } = useNewsletterStyle();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function getTimeUntil(deadline : EventType){
    const dealineTimestamp = new Date(deadline.date).getTime();
    const time = dealineTimestamp - Date.now();
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  }

  useEffect(() => {
    setInterval(() => getTimeUntil(param.deadline), 1000);
    return () => getTimeUntil(param.deadline);
  }, [param.deadline]);

  return (
      <>
        <h1 className={classes.title}>
          <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'magenta' }} inherit>
              {leadingZero(days)} : {leadingZero(hours)} : {leadingZero(minutes)} : {leadingZero(seconds)}
          </Text>
        </h1>
      </>
  );
};
