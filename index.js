mapboxgl.accessToken = "pk.eyJ1IjoibGhhdmxpY2VrIiwiYSI6ImNrdHVhbWQxOTBnaTcycHF0d2pqZDA0MXEifQ.8JvvSKz0_HbhPnlBIStE2Q"

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-74.5, 40],
	zoom: 9
});