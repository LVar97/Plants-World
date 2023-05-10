export interface IProduct {
	id: number;
	link: string;
	image: string;
	name: string;
	cost: number;
	potColor?: string;
	count?: number;
	isFavorite: boolean;
}
