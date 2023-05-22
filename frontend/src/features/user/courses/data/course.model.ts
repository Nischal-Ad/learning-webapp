import { ITestomonial } from '@Features/user/testomonial/data/testomonial.model';

export interface ICourses {
	id: string;
	img: string;
	title: string;
	desc: string;
	author: string;
	rating: 0 | 1 | 2 | 3 | 4 | 5;
	price: number;
	Dprice: number;
	contents: string[];
	requirements: string[];
	testomonial: ITestomonial[];
}

export interface ICoruseHighlight {
	courses: ICourses[];
	title: string;
}

export interface IContentWrapper extends React.PropsWithChildren {
	title: string;
}
