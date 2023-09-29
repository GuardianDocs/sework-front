export const convertDateToZonedDateTime = (dateString: string): string => {
	const date = new Date(dateString);
	const isoString = date.toISOString();
	return isoString;
};

export const convertZonedDateTimeToDate = (
	zonedDateTimeString: string,
): string => {
	const date = new Date(zonedDateTimeString);
	if (isNaN(date.getTime())) return '';
	const dateString = date.toISOString().split('T')[0];
	return dateString;
};
