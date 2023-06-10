import { loadAssets } from "../utils/assets";

export class AssetsService {
    private static assets = loadAssets();

    public static get(assetId : string){
        return this.assets.get(assetId);
    }
}