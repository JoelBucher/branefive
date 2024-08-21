import { Timeline, Badge, Grid, Col, Button } from "@mantine/core";
import { DataService } from "../../../services/DataService";
import { EventType } from "../types/EventType";
import { TourType } from "../types/TourType";
import { DateTimeService } from "../../../services/DateTimeService";
import { useTourNextEventStyle as useTourStyle } from "../hooks/useTourNextEventStyle";
import { IconTicket } from "@tabler/icons-react";
import { BUTTON_BORDER_RADIUS, THEME_COLOR } from "../../../utils/constants";

function ticketButton(event: EventType){
  return(
    <table>
    <tbody>
      <tr>
        <td>
          <p style={{fontSize: 15}}>Tickets</p>
        </td>
      </tr>
      <tr>
        <td>
        <Button
          size="md"
          component="a"
          variant= "filled"
          href={event.ticketLink == null ? "" : event.ticketLink}
          disabled={event.ticketLink == null}
          sx={{
              backgroundColor: THEME_COLOR,
              '&:hover': {
                  backgroundColor: THEME_COLOR,
              },
          }}
          style={{borderRadius: BUTTON_BORDER_RADIUS, marginTop: -20}}
          >
          <p>
            <IconTicket size={40} color="white"/>
          </p>
        </Button>
        </td>
      </tr>
    </tbody>
  </table>);
}

function getEventTitle(event : EventType){
  if(new Date(event.date) < new Date()){
    return(
      <div>
        <table>
          <tbody>
           <tr>
              <td>
                <p style={{marginTop:-5}}>{event.name}</p>
              </td>
              <td>
                <div style={{marginTop: -20, marginLeft: 5}}>
                  <Badge color="red">passed</Badge>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>)
  }
  return <p style={{marginTop:-5}}>{event.name}</p>;
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
  const futureEvents = events.length - pastEvents -1;

  return (
    <Timeline active={futureEvents} bulletSize={20} lineWidth={4} color="red">
      {sorted.map((event, index) => 
        <Timeline.Item
          title={getEventTitle(event)}
          lineVariant={index < futureEvents ? "solid" : "dotted"}
          key={index}
          className={classes.timeline}
          >
            <Grid columns={24}>
              <Col span={12}>
                <p style={{fontSize: 15, lineHeight: 0.4}}>{DateTimeService.formatDate(event.date)}</p>
                <p style={{fontSize: 15, lineHeight: 0.4}}>{event.place.name}</p>
              </Col>
              <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: -40}} >
                {(event.showTicketLink && index <= futureEvents) ? ticketButton(event) : <></>}
              </Col>
            </Grid>
          
        </Timeline.Item>
      )}
    </Timeline>
  );
}