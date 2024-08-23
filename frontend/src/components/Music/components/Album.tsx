import { Grid } from '@mantine/core';
import { AlbumType } from '../types/AlbumType';
import { AssetsService } from '../../../services/AssetsService';
import { RenderLanguageText } from '../../../services/useLanguage';
import { Spotify } from 'react-spotify-embed';
import { BORDER_RADIUS } from '../../../utils/constants';

interface AlbumParameter {
    album: AlbumType;
}

function AlbumImage({album} : AlbumParameter){
    return (
        <img width={240} src={AssetsService.get(album.assetId)} alt={"album"} style={{borderRadius: BORDER_RADIUS}}/>
    );
}

export function Album({album} : AlbumParameter){
    return (
        <>
            <Grid>
                <Grid.Col span={8}>
                    <h2>{album.title}</h2>
                    <p><RenderLanguageText text = {album.description}/></p>
                </Grid.Col>
                <Grid.Col span={4}></Grid.Col>
            </Grid>
            <Grid style={{marginBottom: 64}}>
                <Grid.Col sm={4} orderSm={1}>
                    <AlbumImage album={album}/>
                </Grid.Col>
                <Grid.Col sm={8} orderSm={0}>
                    <Spotify style={{borderRadius: 15}} height={400} wide link={album.spotifyLink} />
                </Grid.Col>
            </Grid>
        </>
    );
}