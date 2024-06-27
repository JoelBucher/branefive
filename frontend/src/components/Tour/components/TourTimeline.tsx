import { Timeline, Text, Badge } from "@mantine/core";
import { DataService } from "../../../services/DataService";
import { EventType } from "../types/EventType";
import { TourType } from "../types/TourType";
import { DateTimeService } from "../../../services/DateTimeService";
import { useTourNextEventStyle as useTourStyle } from "../hooks/useTourNextEventStyle";
import { paste } from "@testing-library/user-event/dist/paste";

function getEventTitle(event : EventType){
  if(new Date(event.date) < new Date()){
    return <>{event.name} {' '} <Badge color="red">passed</Badge></>
  }
  return <>{event.name}</>;
}

export function TourTimeline() {
  const tour : TourType = DataService.getTourData();
  const events : EventType[] = tour.events;
  const sorted = events.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  // count past events
  var pastEvents = 0;
  for(var i=0; i<events.length; i++){
    const cur = new Date(events[i].date);

    if(cur < new Date()){
      pastEvents++;
    }
  }

  const {classes} = useTourStyle();

  console.log(events.length - pastEvents);

  const futureEvents = events.length - pastEvents -1;

  return (
    <Timeline active={futureEvents} bulletSize={20} lineWidth={4} color={"red"}>
      {sorted.map((event, index) => 
        <Timeline.Item title={getEventTitle(event)} lineVariant={index < futureEvents ? "solid" : "dotted"} key={index} className={classes.timeline}>
          <Text size="sm" mt={4}>{DateTimeService.formatDate(event.date)}</Text>
          <Text size="sm" mt={4}>{event.place.name}</Text>
        </Timeline.Item>
      )}
    </Timeline>
  );
}