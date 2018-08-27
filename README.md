


# Google Maps React 'my neighborhood' Project

## A project for Udacity Front-End Web Developer Nanodegree

### About this project
This project is a singla-page application written in Reactjs featuring a map displaying the center of Madrid, ES.
It includes a list of names and markers on the map of points of interests near the displayed area.
With typing into the input field the names of the points of interests in the list and their related markers can be filtered in real time with the
usage of controlled component.

## Functionalities
* Location Filter: Filter list items and markers on the map
* Modal Window with information: Clicking a list item or marker will display a modal window with information about the clicked place.
* Marker effect: Clicking a list item will add an effect to the marker
* [Google Maps API](https://cloud.google.com/maps-platform/maps/) and [Foursquare Search Venue API](https://developer.foursquare.com/docs/api/venues/search) are are requested in an asynchronous way using the Fetch API
* [Foursquare API](https://developer.foursquare.com/docs/api/venues/search) is used to display information about a place
* Accessibility is provided
* Service Worker is implemented to cache files and display the website in offline modus


## To start the app

1) Download the repository

2) Start the development server with `npm start` in your command line for the project folder

3) The app opens automatically in your default browser on localhost 3000

* Note: Make sure Node.js is installed.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Servie Worker and Production Mode
By default, thanks to 'Create React App', there is a build in Service Worker that can load the app from local cache in offline modus.

!! The Service Worker only works in production mode !!

#### Build the Production Mode:
1. Open the command line for the project folder / root directory
2. Run 'npm run build' or 'yarn build'

#### Run the production app on a local server  
1. Follow instruction of 'Build the Production Mode'
2. Run 'serve -s build' in your command line
3. Open provided Localhost address in browser (Default: http://localhost:5000)

Further reading: 

*[create-react-app README](https://github.com/facebook/create-react-app#npm-run-build)
*[create-react-app Deployment](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)



## Code Reference

1. [API Usage Data: Foursquare / Search for Venues](https://developer.foursquare.com/docs/api/venues/search)

2. [Reactjs Documentation](https://reactjs.org/docs/hello-world.html)

3. [Google Maps API](https://cloud.google.com/maps-platform/maps/)

4. [Create React App](https://github.com/facebookincubator/create-react-app)

5. [react-google-maps from tomchentw](https://github.com/tomchentw/react-google-maps)



