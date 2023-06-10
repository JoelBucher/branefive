import { Timeline, Text } from "@mantine/core";
import { DataService } from "../../../services/DataService";
import { EventType } from "../types/EventType";
import { TourType } from "../types/TourType";
import { DateTimeService } from "../../../services/DateTimeService";
import dateFormat from "dateformat";
import { useTourNextEventStyle as useTourStyle } from "../hooks/useTourNextEventStyle";

function getEvents(): EventType[]{
  const tour : TourType = DataService.getTourData();
  return tour.events.reverse();
}

function getSortedEvents(){
  const eventsNotSorted : EventType[] = getEvents();

  return eventsNotSorted.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? 1 : -1)
}

function getNumberOfPastEvents(){
  return getEvents().filter(event => new Date(event.date).getTime() < Date.now()).length;
}

function getLineType(index : number) : "dotted"|"solid"{
  return getNumberOfPastEvents() > index ? "solid" : "dotted";
}

export function TourTimeline() {
  const events = getSortedEvents();
  const {classes} = useTourStyle();

  return (
    <Timeline active={getNumberOfPastEvents()} bulletSize={20} lineWidth={4} color="red">
      {events.map((event, index) => 
        <Timeline.Item title={event.name} lineVariant={getLineType(index)} key={index} className={classes.timeline}>
          <Text size="sm" mt={4}>{DateTimeService.formatDate(event.date)}</Text>
          <Text size="sm" mt={4}>{event.place.name}</Text>
        </Timeline.Item>
      )}
    </Timeline>
  );
}