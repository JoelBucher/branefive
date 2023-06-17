import { IconBrandInstagram, IconBrandSpotify, IconBrandYoutube, IconDirections, IconMicrophone2, IconMusic, IconPlaylist, IconUsersGroup, TablerIconsProps } from "@tabler/icons-react";

export function loadAssets(){
    var assets = new Map();

    assets.set('enjoyer1', require("../assets/enjoyer1.jpg"));
    assets.set('enjoyer2', require("../assets/enjoyer2.png"));
    assets.set('freeTheAnimalInYou', require("../assets/freeTheAnimalInYou.png"));
    assets.set('singinInSilence', require("../assets/singingInSilence.png"));
    assets.set('video', require("../assets/video.mp4"));
    assets.set('richensee', require("../assets/richensee.jpeg"));
    assets.set('logo', require('../assets/branefive_logo.svg'))
    assets.set('elija', require('../assets/elija.jpeg'))
    assets.set('elias', require('../assets/elias.jpeg'))
    assets.set('suvin', require('../assets/suvin.jpeg'))
    assets.set('noah', require('../assets/noah.jpeg'))
    assets.set('julian', require('../assets/julian.jpeg'))
    assets.set('404', require('../assets/404.svg'))

    return assets;
}

// select icons from Tabler Icons set
// see https://tabler-icons.io/
export function loadIcons(){
    var icons = new Map<string,(props: TablerIconsProps) => JSX.Element>();
    icons.set('playlist', IconPlaylist)
    icons.set('tour', IconDirections)
    icons.set('band', IconUsersGroup)
    icons.set('microphone', IconMicrophone2)
    icons.set('music', IconMusic)
    icons.set('spotify', IconBrandSpotify)
    icons.set('youtube', IconBrandYoutube)
    icons.set('instagram', IconBrandInstagram)

    return icons;
}