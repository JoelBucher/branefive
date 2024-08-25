import { Grid, Space } from '@mantine/core';
import { TourTimeline } from './components/TourTimeline';
import { TourNextEvent } from './components/TourNextEvent';
import { AssetsService } from '../../services/AssetsService';
import { DataService } from '../../services/DataService';
import { TourType } from './types/TourType';
import { useMediaQuery } from '@mantine/hooks';
import { BORDER_RADIUS, CONTENT_MARGIN } from '../../utils/constants';

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
    <>
      <Space h={40}/>
      <Grid justify='center' style={{margin: CONTENT_MARGIN}}>
        <Grid.Col sm={5} lg={4}>
          <TourNextEvent/>
          <Space h={20}/>
          <TourTimeline/>
        </Grid.Col>
        <Grid.Col sm={5} lg={4}>
        {!isMdOrSmaller && sideImage()}
        </Grid.Col>
      </Grid>
    </>
  );
}