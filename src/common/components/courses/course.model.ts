export interface ICourses {
	img: string;
	title: string;
	author: string;
	rating: 0 | 1 | 2 | 3 | 4 | 5;
	price: number;
	Dprice?: number;
}

export interface ICoruseSlide {
	courses: ICourses[];
	title: string;
}
