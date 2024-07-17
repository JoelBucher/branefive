import { AspectRatio, Button, Card, Divider, Grid, Image, SimpleGrid, Space, Text } from "@mantine/core";
import { RenderLanguageText } from "../../services/useLanguage";
import { useShopStyle } from "./hooks/useShopStyle";
import { ProductType } from "./types/ProductType";
import { DataService } from "../../services/DataService";
import { ReactNode } from "react";
import { AssetsService } from "../../services/AssetsService";
import { useMediaQuery } from "@mantine/hooks";
import { ShopType } from "./types/ShopType";
import { BORDER_RADIUS, BUTTON_BORDER_RADIUS } from "../../utils/constants";

export function ShopComponent() {
	const classes = useShopStyle().classes;
	const shopData : ShopType = DataService.getShopData();
	const products = shopData.products;
	const isMdOrSmaller = useMediaQuery('(max-width: 768px)');

	function availability(product : ProductType){
		const classStyle = product.available ? classes.available : classes.notAvailable;
		const availabilityText = product.available ? "Available" : "Not Available";
		return(
			<table style={{marginTop: -25}}>
				<tr>
					<th>
						<span className={classStyle}></span>
					</th>
					<th>
						<h3 style={{fontWeight: 200}}>{availabilityText}</h3>
					</th>
				</tr>
			</table>
		)
	}

	function productCards() : ReactNode {
		return products.map(
			(product: ProductType, index : Number) => {
				return (
					<Card
						key={"card" + index}
						p="md"
						radius="md"
						className={classes.card}
						style={{borderRadius: BORDER_RADIUS}}
						>
						<AspectRatio ratio={1920 / 1080}>
							<Image src={AssetsService.get(product.productImage)} alt={product.productImage} />
						</AspectRatio>
						<h3>
							{product.price} CHF
						</h3>
						<h4>
							<RenderLanguageText text={product.name} />
						</h4>
						<Space h={15}/>
						{availability(product)}
						<Button
							className={classes.button}
							component="a"
							href={product.buyLink}
							target="_blank" // open in new tab
							disabled={!product.available}
							style={{borderRadius: BUTTON_BORDER_RADIUS}}
						>
							Buy
						</Button>
					</Card>
				);
			}
		);
	}

	return (
		<Grid justify="center">
			<Grid.Col span={10}>
				<Space h={50}/>
				<h1>
					<RenderLanguageText text={shopData.header}/>
				</h1>
				<p>
					<RenderLanguageText text={shopData.subtitle}/>
				</p>
				<SimpleGrid style={{padding: 50}} cols={isMdOrSmaller ? 1 : 3}>
					{productCards()}
				</SimpleGrid>
			</Grid.Col>
		</Grid>
	);
}
