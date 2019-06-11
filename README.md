# Airfrance Find My Trip app

This web application will allow the user to look for her/his AF bookings.
After providing a valid booking number and family name the results will be displayed.

## Prerequisites
The [AF Booking server](https://github.com/guillermosnipe/airfrance-booking-server) must be up and running before starting this app. The client will get data from it. By default it will look for it on `localhost:4000`

## Installation
After cloning the repo access the main folder and do `npm install`

## Running the app
Just run `npm start`. After a successfull initialization the app will be available on `localhost:4200`

## Questions
If you need to reach me please feel free to do it `snipeglk@gmail.com`

## Release notes

* 1.1.1: GraphQL query tests added.

* 1.1.0:
  - Network errors are properly managed now. The user will be redirected to the check-in view. A message will be also displayed.
  - Regexp improvements
  - Input fields will be focused when a validation error occurs
  - Ng Bootstrap tooltips were implemented to display validation errors.
  - Missing observables unsubscriptions were added
  - Accesibility improvements

* 1.0: Initial Release
