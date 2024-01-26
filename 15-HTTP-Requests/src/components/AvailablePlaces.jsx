/** @format */

import Places from './Places.jsx';
import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
	const [isFetching, setIsFetching] = useState(false);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [error, setError] = useState([]);
	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);
			try {
				const response = await fetch('http://localhost:3000/places');
				const resData = await response.json();
				// console.log(resData.places);
				if (!response.ok) {
					throw new Error('Failed to fetch places');
				}
				setAvailablePlaces(resData.places);
				setIsFetching(false);
				// navigator.geolocation.getCurrentPosition((position) => {
				// 	const sortedPlaces = sortPlacesByDistance(
				// 		resData.places,
				// 		position.coords.latitude,
				// 		position.coords.longitude
				// 	);
				// 	console.log(`Sorted: ${sortedPlaces}`);
				// 	setAvailablePlaces(resData.places); // used to be setAvailablePlaces(sortedPlaces)
				// 	setIsFetching(false);
				// });
			} catch (error) {
				setError({
					message:
						error.message || 'Could not fetch places! Please, try again later!',
				});
				setIsFetching(false);
			}
		}

		fetchPlaces();
	}, []);

	// if (error) {
	// 	console.log(error);

	// 	return <Error title='An error occurred!' message={error.message} />;
	// }

	return (
		<Places
			title='Available Places'
			places={availablePlaces}
			isLoading={isFetching}
			fallbackText='No places available.'
			loadingText={'Fetching places data...'}
			onSelectPlace={onSelectPlace}
		/>
	);
}
