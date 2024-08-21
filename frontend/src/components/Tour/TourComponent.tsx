import { Grid } from '@mantine/core';
import { TourTimeline } from './components/TourTimeline';
import { TourNextEvent } from './components/TourNextEvent';
import { AssetsService } from '../../services/AssetsService';
import { DataService } from '../../services/DataService';
import { TourType } from './types/TourType';
import { useMediaQuery } from '@mantine/hooks';
import { BORDER_RADIUS } from '../../utils/constants';

export function Tour() {
  const tourData : TourType = DataService.getTourData();
  const tourImage = tourData.tourImage;
  const isMdOrSmaller = useMediaQuery('(max-width: 768px)');

  function sideImage(){
    return(
      <Grid.Col span="content">
        <img src={AssetsService.get(tourImage)} style={{borderRadius: BORDER_RADIUS}} width={"100%"} alt=''/>
      </Grid.Col>
    );
  }

  return (
    <Grid justify='center' style={{marginTop: 50}}>
      <Grid.Col sm={5} lg={4}>
        <TourNextEvent/>

        <TourTimeline/>
      </Grid.Col>
      <Grid.Col sm={5} lg={4}>
      {!isMdOrSmaller && sideImage()}
      </Grid.Col>

    </Grid>
  );
}