<script lang="ts">
	import { afterUpdate } from 'svelte';
	import CourseDetailLive from '$lib/components/courseDetailLive.svelte';
	import ObjectivesCourseDetail from '$lib/components/objectivesCourseDetail.svelte';
	import detailCourse1 from '$lib/assets/detail-course-1.jpg';
	import type { BaseCourse } from '$lib/types.js';
	export let data;

	let course: BaseCourse = data.course;

	afterUpdate(() => {
		course = data.course;
	});
</script>

<svelte:head>
	<title>{course.name} - Curso en línea</title>
	<meta
		name="description"
		content={course.shortDescriptionEcommerce || 'Descripción general del curso'}
	/>
	<meta property="og:title" content={course.name} />
	<meta property="og:description" content={course.shortDescriptionEcommerce} />
</svelte:head>

<CourseDetailLive
	courseTitle={course?.name}
	courseDescription={course?.shortDescriptionEcommerce}
	duration={course?.duration ? `${course.duration} horas` : '32 horas'}
	certifiedEntity={course?.certifiedEntityEcommerce}
	courses={course?.scheduledCourses || []}
/>

<ObjectivesCourseDetail
	title="Introducción"
	subtitle="Más información sobre el curso"
	prerequisites={course?.prerequisites
		? `Prerrequisitos: ${course.prerequisites}`
		: 'No hay prerrequisitos formales para esta certificación.'}
	description={course?.descriptionEcommerce}
	objectives={course?.objectivesEcommerce}
	examInfo={course?.examInfoEcommerce}
	imgSrc={detailCourse1}
/>
