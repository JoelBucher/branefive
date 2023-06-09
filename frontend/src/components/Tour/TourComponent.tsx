import { Grid } from '@mantine/core';
import { TourTimeline } from './components/TourTimeline';
import { TourNextEvent } from './components/TourNextEvent';
import { TourCard } from './components/TourCard';

export function Tour() {
  return (
    <>
    <TourNextEvent/>
    <Grid justify='center'>
      <Grid.Col span={4}>
        <TourTimeline/>
      </Grid.Col>
      <Grid.Col span={4}>
        
      </Grid.Col>
    </Grid>
    </>
  );
}