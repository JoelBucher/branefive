import { AspectRatio, Grid } from '@mantine/core';
import { TourTimeline } from './components/TourTimeline';
import { TourNextEvent } from './components/TourNextEvent';
import { AssetsService } from '../../services/AssetsService';
import { DataService } from '../../services/DataService';
import { TourType } from './types/TourType';
import { log } from 'console';

export function Tour() {
  const tourData : TourType = DataService.getTourData();
  const tourImage = tourData.tourImage;
  return (
    <Grid align='center' justify='center'>
      <Grid.Col sm={10} lg={8}>
        <TourNextEvent/>
        <Grid justify='center' columns={8}>
          <Grid.Col md={3} lg={3}>
            <TourTimeline/>
          </Grid.Col>
          <Grid.Col md={5} lg={5}>
            <AspectRatio ratio={1920 / 1080}>
                <img src={AssetsService.get(tourImage)} style={{borderRadius: 20}}/>
            </AspectRatio>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}