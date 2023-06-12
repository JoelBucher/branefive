import {
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Button,
  } from '@mantine/core';
import { useHeadlinesStyle } from '../hooks/useHeadlinesStyle';
import { DataService } from '../../../services/DataService';
import { translate } from '../../../services/LanguageService';
import { FeaturesParameter } from '../types/FeatureType';
import { IconService } from '../../../services/IconService';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

function Features(params : FeaturesParameter){
    const { classes, theme } = useHeadlinesStyle();

    const features = params.features.map((feature, index) => {
        function DesktopButton(){
            if(!isMobile){
                return(
                    <Link to={feature.link}>
                        <Button style={{top: 15}}>{translate(feature.buttonText)}</Button>
                    </Link>)
            }else{
                return(<></>)
            }
        }

        const Icon = IconService.get(feature.iconAssetId);
        if(Icon != undefined){
            return(
                <Card key={index} shadow="md" radius="md" className={classes.card} padding="xl">
                    <Icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
                    <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                        {translate(feature.title)}
                    </Text>
                    <Text fz="sm" c="dimmed" mt="sm">
                        {translate(feature.subtitle)}
                    </Text>
                    <DesktopButton/>
                </Card>
            )
        }
    });
    return <>{features}</>
}

export function Headlines(){
const { classes } = useHeadlinesStyle();
const data = DataService.getHeadlinesData();
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        {translate(data.title)}
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        {translate(data.subtitle)}
      </Text>

      <SimpleGrid cols={3} mt={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Features features = {data.features}/>
      </SimpleGrid>
    </Container>
  );
}