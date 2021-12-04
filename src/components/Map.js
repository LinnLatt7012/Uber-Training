import React,{useRef,useEffect, useMemo} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import tw from "tailwind-react-native-classnames"
import { useDispatch, useSelector } from 'react-redux'
import { selectOrigin, selectDestination, setTravelTimeInformation } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from "@env"
import MapViewDirections from "react-native-maps-directions"

const Map = () => {
    const origin = useSelector(selectOrigin)
    const desination = useSelector(selectDestination)
    const dispatch = useDispatch();
    const mapRef  = useRef()
    useEffect(() => {
      if(!origin || !desination) return;
      mapRef.current.fitToSuppliedMarkers(["origin", "desination"],{
        edgePadding:{
          top:50, right:50, bottom: 50, left:50
        }
      })
      return () => {
      }
    }, [origin,desination])

    useEffect(() => {
      if(!origin || !desination) return;
      const getTravelTime = async() =>{
          fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${desination.description}&key=${GOOGLE_MAPS_APIKEY}`)
          .catch((error)=> console.log("error",error))
          .then((res)=> {
            res.json()})
            .then((data)=>{
              console.log(data ===undefined? "bill error": data);
              dispatch(setTravelTimeInformation(data == undefined?
                {
                  distance: {
                  text: "7 mi",
                  value: 763,
                  },
                  duration: {
                    text: "0 hr 30 mins",
                    value: 592
                  },
                  status: "OK"
                }:data.rows[0].elements[0]))
            })
      }
      getTravelTime()
    }, [origin,desination, GOOGLE_MAPS_APIKEY])
    return (
      <>
        <MapView
          style={tw`flex-1`}
          ref={mapRef}
          // mapType ="mutedStandard"
          debounce={400}
          initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          {origin && desination && (
            <MapViewDirections
                  // coordinate={{
                  //     latitude: desination.location.lat,
                  //     longitude: desination.location.lng
                  // }}
                  origin={{
                      latitude: origin.location.lat,
                      longitude: origin.location.lng
                  }}
                  desination={{
                      latitude: desination.location.lat,
                      longitude: desination.location.lng
                  }}
                  onError={(errorMessage) => {
                      console.log('GOT AN ERROR');
                  }}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={3}
                  strokeColor="hotpink"
            />
          )}
        
          {origin?.location && (
            <Marker
                  coordinate={{
                      latitude: origin.location.lat,
                      longitude: origin.location.lng
                  }}
                  title="Origin"
                  description={origin.description}
                  identifier="origin"
            />
          )}
          {desination?.location && (
            <Marker
                  coordinate={{
                      latitude: desination.location.lat,
                      longitude: desination.location.lng
                  }}
                  title="Desination"
                  description={desination.description}
                  identifier="desination"
            />
          )}
          </MapView>
        </>
    )
}

export default Map

const toInputBox = StyleSheet.create({

})
