import GoogleMapReact from 'google-map-react';

export function TourMap(){
    const defaultProps = {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 11
      };
    

    return (
        <div style={{ height: 300, width: 300, borderRadius: 10, overflow: 'hidden' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          </GoogleMapReact>
        </div>
      );
}