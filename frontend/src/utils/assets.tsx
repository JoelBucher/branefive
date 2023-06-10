export function loadAssets(){
    var assets = new Map;

    assets.set('enjoyer1', require("../assets/enjoyer1.jpg"));
    assets.set('enjoyer2', require("../assets/enjoyer2.png"));
    assets.set('freeTheAnimalInYou', require("../assets/freeTheAnimalInYou.png"));
    assets.set('singinInSilence', require("../assets/singingInSilence.png"));
    assets.set('video', require("../assets/video.mp4"));
    assets.set('richensee', require("../assets/richensee.jpeg"));
    assets.set('logo', require('../assets/branefive_logo.svg'))

    return assets;
}