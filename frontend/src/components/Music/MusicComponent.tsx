import { DataService } from '../../services/DataService';
import { AlbumType } from './types/AlbumType';
import { Album } from './components/Album';
import { Grid, Space } from '@mantine/core';
import { Spotify } from 'react-spotify-embed';

export function Music(){
    const albums : AlbumType[] = DataService.getAlbums();

    return (
        <>
            <Space h={100}/>
            <Grid justify='center'>
                <Grid.Col span={11}>
                    {albums.map((album, index) =>
                        <Album album = {album} key={index}/>
                    )}
                </Grid.Col>
            </Grid>
        </>
    );
}