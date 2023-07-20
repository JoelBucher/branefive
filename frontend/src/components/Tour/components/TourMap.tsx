import { GoogleMap, LoadScript, useGoogleMap } from '@react-google-maps/api'

export function TourMap(){

    return (
        <LoadScript
        googleMapsApiKey=""
      >
        <GoogleMap
          mapContainerStyle={{width: '400px', height: '400px'}}
          center={{lat: -3.745, lng: -38.523}}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      );
}