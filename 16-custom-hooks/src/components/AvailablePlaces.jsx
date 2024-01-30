/** @format */

import { useFetch } from '../hooks/useFetch.js';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
	const { isFetching, error, fetchedData, setFetchedData } = useFetch(
		fetchAvailablePlaces,
		[]
	);

	// navigator.geolocation.getCurrentPosition((position) => {
	// 	const sortedPlaces = sortPlacesByDistance(
	// 		places,
	// 		position.coords.latitude,
	// 		position.coords.longitude
	// 	);
	// 	setAvailablePlaces(sortedPlaces);
	// 	setIsFetching(false);
	// });

	if (error) {
		return <Error title='An error occurred!' message={error.message} />;
	}

	return (
		<Places
			title='Available Places'
			places={fetchedData}
			isLoading={isFetching}
			loadingText='Fetching place data...'
			fallbackText='No places available.'
			onSelectPlace={onSelectPlace}
		/>
	);
}
