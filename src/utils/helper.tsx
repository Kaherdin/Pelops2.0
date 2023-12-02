import { format as Format } from "date-fns";
import "i18n";
import { fr, en, de, it } from "date-fns/locale";
import i18n from "i18n-js";
import { LatLng } from "react-native-maps";
import { ImageUpload } from "types/global";

export type GravityType =
  | "auto"
  | "center"
  | "face"
  | "face:center"
  | "north"
  | "north_east"
  | "east"
  | "south_east"
  | "south"
  | "south_west"
  | "west"
  | "north_west"
  | string;

export type ResizeType = "fit" | "fill" | "limit" | "pad" | "crop" | "scale" | string;

export const formDataImage = async (values = {}, image: ImageUpload, field = "cover") => {
  let imageUri;
  if (typeof image === "string") {
    imageUri = image;
  } else if (image && image.uri) {
    imageUri = image.uri;
  } else {
    imageUri = null;
  }

  const formData = new FormData();
  formData.append("data", JSON.stringify(values));
  image &&
    formData.append(
      `files.${field}`,
      JSON.parse(
        JSON.stringify({
          uri: imageUri,
          type: "image/jpeg",
          name: field,
        })
      )
    );

  return formData;
};

//Text
export function truncateWithEllipses(text: string, max: number) {
  return text.substr(0, max - 1) + (text.length > max ? "..." : "");
}

export function truncateWithReadmore(text: string, max: number) {
  return text.substr(0, max - 1) + (text.length > max ? "<a" : "");
}

export function formatDate(date: Date): string {
  const newDate = new Date(date);
  let formattedDate: string;
  //TODO find a better way to translate the date ?
  const localeCode = i18n.locale.substring(0, 2);
  switch (localeCode) {
    case "en":
      formattedDate = Format(newDate, "dd MMMM yyyy", { locale: en });
      break;
    case "fr":
      formattedDate = Format(newDate, "dd MMMM yyyy", { locale: fr });
      break;
    case "de":
      formattedDate = Format(newDate, "dd MMMM yyyy", { locale: de });
      break;
    case "it":
      formattedDate = Format(newDate, "dd MMMM yyyy", { locale: it });
      break;
    default:
      formattedDate = Format(newDate, "dd MMMM yyyy", { locale: en });
      break;
  }
  return formattedDate;
}

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const rad = function (x: number) {
  return (x * Math.PI) / 180;
};
export function computeDistance(p1: LatLng, p2: LatLng): number {
  const R = 6378137; // Earth’s mean radius in meter
  const dLat = rad(p2.latitude - p1.latitude);
  const dLong = rad(p2.longitude - p1.longitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d; // returns the distance in meter
}
