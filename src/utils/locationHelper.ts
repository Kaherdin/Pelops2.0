import * as Location from "expo-location";
import axios from "axios";
import { GOOGLE_ADDRESS_KEY } from "@env";
import I18n from "i18n-js";

const RADIUS = 10000;

export interface AddressSuggestions {
  description: string;
  place_id: string;
}

export async function fetchSuggestions(input: string) {
  const { status } = await Location.requestForegroundPermissionsAsync();

  let response = null;
  if (status !== "granted") {
    console.log("Permission to access location was denied");
    response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&rankBy=distance&language=${I18n.locale}&key=${GOOGLE_ADDRESS_KEY}`
    );
  } else {
    const loc = await Location.getCurrentPositionAsync({});
    response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&location=${loc.coords.latitude}%2C-${loc.coords.longitude}&radius=${RADIUS}&language=${I18n.locale}&key=${GOOGLE_ADDRESS_KEY}`
    );
  }
  return response.data.predictions;
}

export async function fetchPlaceDetails(placeId: string) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_ADDRESS_KEY}`
  );
  return response.data.result.geometry.location;
}

export async function getLocalPosition() {
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    console.log("Permission to access location was denied");
    return null;
  }

  const loc = await Location.getCurrentPositionAsync({});
  return loc.coords;
}