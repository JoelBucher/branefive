import { Grid, Text } from '@mantine/core';
import { DataService } from '../services/DataService';
import { translate } from '../services/LanguageService';
import { StatsElement } from '../types/StatsElement';
import { useStatsGroupStyle } from '../hooks/useStatsGroupStyle';

export function StatsGroup() {
  const { classes } = useStatsGroupStyle();
  /*
  const data : StatsElement[] = DataService.getGroupStatsData();

  const stats = data.map((stat) => (
    <div key = {stat.title.en} className={classes.stat}>
      <Text className={classes.count}>{translate(stat.title)}</Text>
      <Text className={classes.title}>{translate(stat.category)}</Text>
      <Text className={classes.description}>{translate(stat.description)}</Text>
    </div>
  ));

  return (
    <Grid justify="center">
      <Grid.Col md={10} lg={7}>
        <div className={classes.root}>{stats}</div>
      </Grid.Col>
    </Grid>
  )
  */
 return(<></>)
  
}
