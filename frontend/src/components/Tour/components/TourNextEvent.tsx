import { Grid } from "@mantine/core";
import { DataService } from "../../../services/DataService"
import { EventType } from "../types/EventType";
import { TourType } from "../types/TourType";
import { TourCountdown } from "./TourCountdown";
import { IconMapPin, IconClock} from '@tabler/icons-react';
import { useTourNextEventStyle } from "../hooks/useTourNextEventStyle";
import { DateTimeService } from "../../../services/DateTimeService";

function toTimestamp(stringDate : string){
    return new Date(stringDate).getTime();
}

function getNextUpcomingEvent() : EventType {
    const tour : TourType = DataService.getTourData();
    const events : EventType[] = tour.events;

    const futureEvents = events.filter(event => toTimestamp(event.date) >= Date.now())
    return futureEvents.sort((a,b) => toTimestamp(a.date) > toTimestamp(b.date) ? 1 : -1)[0]
}

export function TourNextEvent(){
    const nextUpcomingEvent : EventType = getNextUpcomingEvent();
    const { classes } = useTourNextEventStyle();

    return(
        <>
         <Grid justify="center">
            <Grid.Col span={8}>
                <h2 style={{color: "white", marginBottom: -10}}>{nextUpcomingEvent.name}</h2>

                <TourCountdown deadline = {nextUpcomingEvent}/>

                <table>
                    <tbody>
                        <tr>
                            <td><IconMapPin className={classes.icon}/></td>
                            <td><p className={classes.subsubtitle}>{nextUpcomingEvent.place.name}</p></td>
                            <td><IconClock className={classes.icon}/></td>
                            <td><p className={classes.subsubtitle}>{DateTimeService.formatDate(nextUpcomingEvent.date)}</p></td>
                        </tr>
                    </tbody>
                </table>
            </Grid.Col>
        </Grid>
        </>
    )
}
