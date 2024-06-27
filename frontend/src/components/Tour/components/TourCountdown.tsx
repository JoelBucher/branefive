import { useEffect, useState } from "react";
import { Text } from '@mantine/core';
import { EmptyEvent, EventType } from "../types/EventType";

interface EventParameter {
  deadline: EventType
}

function leadingZero(num : number) : string {
  return (num < 10 ? "0" + num : "" + num);
}

export function TourCountdown(param : EventParameter) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const hasNextEvent : boolean = param.deadline != EmptyEvent;

  function getTimeUntil(deadline : EventType){
    const dealineTimestamp = new Date(deadline.date).getTime();
    const time = dealineTimestamp - Date.now();
    if (time >= 0) {
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

  function displayTime(){
    return(
      <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'magenta' }} inherit>
        {leadingZero(days)} : {leadingZero(hours)} : {leadingZero(minutes)} : {leadingZero(seconds)}
      </Text>
    )
  }

  function noNextEvent(){
    return(
      <>No upcoming event :(</>
    )
  }

  return (
      <>
        <h1>
          {hasNextEvent ? displayTime() : noNextEvent()}
        </h1>
      </>
  );
};
