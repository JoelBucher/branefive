import { Grid } from "@mantine/core";
import { DataService } from "../../../services/DataService"
import { EmptyEvent, EventType } from "../types/EventType";
import { TourType } from "../types/TourType";
import { TourCountdown } from "./TourCountdown";
import { IconMapPin, IconClock} from '@tabler/icons-react';
import { useTourNextEventStyle } from "../hooks/useTourNextEventStyle";
import { DateTimeService } from "../../../services/DateTimeService";

function toTimestamp(stringDate : string){
    return new Date(stringDate).getTime();
}

function getNextEvent() : EventType {
    const tour : TourType = DataService.getTourData();
    const events : EventType[] = tour.events;

    const futureEvents = events.filter((et : EventType) => toTimestamp(et.date) >= Date.now());
    if(futureEvents.length === 0)
        return EmptyEvent

    return futureEvents.sort((a,b) => toTimestamp(a.date) > toTimestamp(b.date) ? 1 : -1)[0]
}

export function TourNextEvent(){
    const latestEvent : EventType = getNextEvent();
    const hasNextEvent : boolean = latestEvent != EmptyEvent;
    const { classes } = useTourNextEventStyle();

    function eventInfo(){
        return(
            <table>
                <tbody>
                    <tr>
                        <td><IconMapPin className={classes.icon}/></td>
                        <td><p className={classes.subsubtitle}>{latestEvent.place.name}</p></td>
                        <td><IconClock className={classes.icon}/></td>
                        <td><p className={classes.subsubtitle}>{DateTimeService.formatDate(latestEvent.date)}</p></td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return(
        <>
         <Grid>
            <Grid.Col span={8}>
                <h2>{latestEvent.name}</h2>
                <TourCountdown deadline = {latestEvent}/>
                {hasNextEvent ? eventInfo() : <></>}
            </Grid.Col>
        </Grid>
        </>
    )
}
