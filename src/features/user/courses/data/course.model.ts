export interface ICourses {
	id: string;
	img: string;
	title: string;
	desc: string;
	author: string;
	rating: 0 | 1 | 2 | 3 | 4 | 5;
	price: number;
	Dprice?: number;
}

export interface ICoruseSlide {
	courses: ICourses[];
	title?: string;
}

export interface IContentWrapper extends React.PropsWithChildren {
	title: string;
}
