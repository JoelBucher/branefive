import { TablerIconsProps } from "@tabler/icons-react";
import { loadIcons } from "../utils/assets";

export class IconService {
    private static icons = loadIcons();

    public static get(iconId : string) : ((props: TablerIconsProps) => JSX.Element) | undefined {
        return this.icons.get(iconId);
    }
}