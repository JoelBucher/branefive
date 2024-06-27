import { Timeline, Text, Badge } from "@mantine/core";
import { DataService } from "../../../services/DataService";
import { EventType } from "../types/EventType";
import { TourType } from "../types/TourType";
import { DateTimeService } from "../../../services/DateTimeService";
import { useTourNextEventStyle as useTourStyle } from "../hooks/useTourNextEventStyle";

function getEvents(): EventType[]{
  const tour : TourType = DataService.getTourData();
  return tour.events.reverse();
}

function getSortedEvents(){
  var eventsNotSorted : EventType[] = getEvents();
  var sortedEvents = eventsNotSorted.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? 1 : -1)
  return sortedEvents;
}

function getNumberOfPastEvents() : number {
  return getEvents().filter(event => new Date(event.date).getTime() < Date.now()).length;
}

function getLineType(index : number) : "dotted"|"solid" {
  return getNumberOfPastEvents() > index ? "solid" : "dotted";
}

function getEventTitle(event : EventType){
  if(new Date(event.date).getTime() < Date.now()){
    return <>{event.name} {' '} <Badge color="red">passed</Badge></>
  }
  return <>{event.name}</>;
}

export function TourTimeline() {
  const events = getSortedEvents();
  const {classes} = useTourStyle();

  return (
    <Timeline active={getNumberOfPastEvents()} bulletSize={20} lineWidth={4} color={"red"}>
      {events.map((event, index) => 
        <Timeline.Item title={getEventTitle(event)} lineVariant={getLineType(index)} key={index} className={classes.timeline}>
          <Text size="sm" mt={4}>{DateTimeService.formatDate(event.date)}</Text>
          <Text size="sm" mt={4}>{event.place.name}</Text>
        </Timeline.Item>
      )}
    </Timeline>
  );
}