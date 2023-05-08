import { ISlider } from '@Features/user/Dashboard/data/dashboard.model';

export const Slides: ISlider[] = [
	{
		img: `https://picsum.photos/800/600?random=${Math.floor(
			Math.random() * 100
		)}`,
		desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam nec justo at commodo. Nam ac nisi in augue consectetur rhoncus.`,
	},
	{
		img: `https://picsum.photos/800/600?random=${Math.floor(
			Math.random() * 100
		)}`,
		desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam nec justo at commodo. Nam ac nisi in augue consectetur rhoncus.`,
	},
	{
		img: `/src/assets/img/goalImg.jpg`,
		desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam nec justo at commodo. Nam ac nisi in augue consectetur rhoncus.`,
	},
];
