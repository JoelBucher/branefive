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
import { FeaturesParameter } from '../types/FeatureType';
import { IconService } from '../../../services/IconService';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
import { RenderLanguageText } from '../../../services/useLanguage';

function Features(params : FeaturesParameter){
    const { classes, theme } = useHeadlinesStyle();

    const features = params.features.map((feature, index) => {
        function DesktopButton(){
            if(!isMobile){
                return(
                    <Link to={feature.link}>
                        <Button style={{top: 15}}>
                          <RenderLanguageText text = {feature.buttonText}/>
                        </Button>
                    </Link>)
            }else{
                return(<></>)
            }
        }

        const Icon = IconService.get(feature.iconAssetId);
        if(Icon !== undefined){
            return(
                <Card key={index} shadow="md" radius="md" className={classes.card} padding="xl">
                    <Icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
                    <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">

                        <RenderLanguageText text = {feature.title}/>
                    </Text>
                    <Text fz="sm" c="dimmed" mt="sm">
                        <RenderLanguageText text = {feature.subtitle}/>
                    </Text>
                    <DesktopButton/>
                </Card>
            )
        }else{
          return(<></>)
        }
    });
    return <>{features}</>
}

export function Headlines(){
const { classes } = useHeadlinesStyle();
const data = DataService.getHeadlinesData();
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center">
        <RenderLanguageText text = {data.title}/>
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        <RenderLanguageText text = {data.subtitle}/>
      </Text>

      <SimpleGrid cols={3} mt={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Features features = {data.features}/>
      </SimpleGrid>
    </Container>
  );
}