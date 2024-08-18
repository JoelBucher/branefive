import { AspectRatio, Grid } from '@mantine/core';
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
      <Grid.Col span={5}>
        <AspectRatio ratio={1920 / 1080}>
            <img src={AssetsService.get(tourImage)} style={{borderRadius: BORDER_RADIUS}}/>
        </AspectRatio>
      </Grid.Col>
    );
  }

  return (
    <Grid align='center' justify='center' style={{marginTop: 50}}>
      <Grid.Col sm={10} lg={8}>
        <TourNextEvent/>

        <Grid columns={8}>
          <Grid.Col span={3}>
            <TourTimeline/>
          </Grid.Col>

          {!isMdOrSmaller && sideImage()}
        </Grid>

      </Grid.Col>
    </Grid>
  );
}