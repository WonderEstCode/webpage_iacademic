import type { PageServerLoad } from './$types';
import { formatDate, formatHour } from '$lib/utils/format';
import type { BaseCourse, ScheduledCourse } from '$lib/types';

export const prerender = true;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const response = await fetch(`https://apineocentic.net:4000/v2/public-courses/${slug}`);
	if (!response.ok) {
		throw new Error('Error al obtener los datos del API');
	}
	const data = await response.json();
	let course: BaseCourse = JSON.parse(data.data);

	if (course?.hasScheduledCourses) {
		console.log('course', course);
		course.scheduledCourses = course.scheduledCourses.map((scheduledCourse: ScheduledCourse) => {
			return {
				...scheduledCourse,
				startDate: formatDate(scheduledCourse.startDate),
				finishDate: formatDate(scheduledCourse.finishDate),
				startHour: formatHour(scheduledCourse.startHour),
				finishHour: formatHour(scheduledCourse.finishHour)
			};
		});
	} else {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { scheduledCourses, ...rest } = course;
		course = rest;
	}

	return { course };
};

export const entries = () => {
	return [
		{ slug: 'itil-4-fundamentos' },
		{ slug: 'itil-4-create-deliver-support' },
		{ slug: 'itil-4-digital-it-strategy' },
		{ slug: 'itil-4-direct-plan-improve' },
		{ slug: 'itil-4-drive-stakeholder-value' },
		{ slug: 'itil-4-high-velocity-it' },
		{ slug: 'agile-leader' },
		{ slug: 'agile-hr' },
		{ slug: 'agile-coach' },
		{ slug: 'certified-iso-22301' },
		{ slug: 'certified-iso-27001' },
		{ slug: 'auditor-lider-iso-9001' },
		{ slug: 'cobit-2019-fundaments' },
		{ slug: 'scrum' }
	];
};
