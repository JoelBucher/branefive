import { Grid } from '@mantine/core';
import { TourTimeline } from './components/TourTimeline';
import { TourNextEvent } from './components/TourNextEvent';
import { TourMap } from './components/TourMap';

export function Tour() {
  return (
    <>
    <TourNextEvent/>
    <Grid justify='center'>
      <Grid.Col span={8}>
        <TourTimeline/>
      </Grid.Col>
    </Grid>
    </>
  );
}