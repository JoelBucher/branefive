import { AspectRatio, Button, Card, Divider, Image, SimpleGrid, Space, Text } from "@mantine/core";
import { RenderLanguageText } from "../../services/useLanguage";
import { useShopStyle } from "./hooks/useShopStyle";
import { ProductType } from "./types/ProductType";
import { DataService } from "../../services/DataService";
import { ReactNode } from "react";
import { AssetsService } from "../../services/AssetsService";

export function ShopComponent() {
	const classes = useShopStyle().classes;

	const products = DataService.getShopProducts();

	function productCards() : ReactNode {
		return products.map(
			(product: ProductType, index : Number) => {
				return (
					<Card
						key={"card" + index}
						p="md"
						radius="md"
						className={classes.card}>
						<AspectRatio ratio={1920 / 1080}>
							<Image src={AssetsService.get(product.productImage)} alt={product.productImage} />
						</AspectRatio>
						<h3>
							{product.price} CHF
						</h3>
						<Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
							
						</Text>
						<Text mt={5}>
							<RenderLanguageText text={product.name} />
						</Text>
						<Text mt={5}>
							<RenderLanguageText text={product.description} />
						</Text>
						<Divider/>
						<Button className={classes.button}>
							Buy
						</Button>
					</Card>
				);
			}
		);
	}

	return (
		<>
			<SimpleGrid cols={3} style={{padding: 50}}>
				{productCards()}
			</SimpleGrid>
		</>
	);
}
