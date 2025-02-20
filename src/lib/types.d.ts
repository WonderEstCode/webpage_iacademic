export type ScheduledCourse = {
	key: string;
	name: string;
	startDate: string;
	finishDate: string;
	startHour: string;
	finishHour: string;
	studentsCount: number;
};

export type BaseCourse = {
	name: string;
	price: string;
	id: string;
	key: string;
	certifiedEntityEcommerce: string | null;
	shortDescriptionEcommerce: string | null;
	prerequisites: string | null;
	relatedTechnologies: string | null;
	name: string;
	duration: number | null;
	keyWord: string;
	descriptionEcommerce: string | null;
	objectivesEcommerce: string[] | null;
	examInfoEcommerce: string[] | null;
	scheduledCourses?: ScheduledCourse[];
	hasScheduledCourses: boolean;
};

declare global {
	interface Window {
		onCaptchaSuccess: (token: string) => void;
		grecaptcha?: {
			reset: () => void;
			execute: () => void;
		};
	}
}

export {};
