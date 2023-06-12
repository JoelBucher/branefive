import { ScrollArea, Table, Grid, Image } from '@mantine/core';
import { useMusicStyle } from '../useMusicStyle';
import { AlbumType } from '../types/AlbumType';
import { AssetsService } from '../../../services/AssetsService';
import { translate } from '../../../services/LanguageService';

interface AlbumParameter {
    album: AlbumType;
}

function SongList({album} : AlbumParameter){
    const { classes, theme } = useMusicStyle();

    return <>
        {album.songs.map((song) => {
            return (
                <tr key={song.title}>
                    <td>{song.trackNumber}</td>
                    <td>{song.title}</td>
                    <td>{song.duration}</td>
                </tr>
            );
        })}
    </>;
}


function AlbumContent({album} : AlbumParameter){
    return(
        <ScrollArea>
            <Table verticalSpacing="xs">
            <tbody>
                <SongList album={album}/>
            </tbody>
            </Table>
        </ScrollArea>
    );
}

function AlbumImage({album} : AlbumParameter){
    return (
        <Image maw={240} mx="auto" radius="md" src={AssetsService.get(album.assetId)} alt="Random image" />
    );
}

export function Album({album} : AlbumParameter){
    return (
        <>
            <Grid>
                <Grid.Col span={8}>
                    <h2>{album.title}</h2>
                    <p>{translate(album.description)}</p>
                </Grid.Col>
                <Grid.Col span={4}></Grid.Col>
            </Grid>
            <Grid style={{marginBottom: 64}}>
                <Grid.Col sm={4} orderSm={1}>
                    <AlbumImage album={album}/>
                </Grid.Col>
                <Grid.Col sm={8} orderSm={0}>
                    <AlbumContent album={album}/>
                </Grid.Col>
            </Grid>
        </>
    );
}