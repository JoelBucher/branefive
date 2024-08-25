import { DataService } from '../../services/DataService';
import { AlbumType } from './types/AlbumType';
import { Album } from './components/Album';
import { Space } from '@mantine/core';
import { CONTENT_MARGIN } from '../../utils/constants';

export function Music(){
    const albums : AlbumType[] = DataService.getAlbums();

    return (
        <>
        <Space h={100}/>
        <div style={{margin: CONTENT_MARGIN + 10}}>
            {albums.map((album, index) =>
                <Album album = {album} key={index}/>
            )}
        </div>
        </>
    );
}