import { DataService } from '../../services/DataService';
import { AlbumType } from './types/AlbumType';
import { Album } from './components/Album';
import { Grid } from '@mantine/core';

export function Music(){
    const albums : AlbumType[] = DataService.getAlbums();

    return (
        <>
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