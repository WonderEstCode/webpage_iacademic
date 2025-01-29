export function formatCurrency(value: number, locale = 'es-CO', currency = 'COP'): string {
	return (
		value.toLocaleString(locale, {
			style: 'currency',
			currency,
			minimumFractionDigits: 0
		}) + ' COP'
	);
}

export function formatDate(date: string): string {
	const options = { year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
	const parsedDate = new Date(date);
	return new Intl.DateTimeFormat('es-ES', options).format(parsedDate);
}

export function formatHour(hour: string): string {
	if (hour.includes('hrs')) {
		return hour;
	}
	const [hours, minutes] = hour.split(':');
	return `${hours}:${minutes} hrs`;
}
