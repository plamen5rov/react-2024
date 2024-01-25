/** @format */

import Places from './Places.jsx';
import { useState, useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
	const [isFetching, setIsFetching] = useState(false);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);
			const response = await fetch('http://localhost:3000/places');
			const resData = await response.json();
			setAvailablePlaces(resData.places);
			setIsFetching(false);
		}

		fetchPlaces();
	}, []);

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
