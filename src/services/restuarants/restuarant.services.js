import camelize from "camelize";
import { mockImages, mocks } from "./mock";

export const restuarantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

export const resturantTramsform = ({ results = [] }) => {
  const mappedResult = results.map((restuarent) => {
    restuarent.photos = restuarent.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });
    return {
      ...restuarent,
      isClosedTemporarily: restuarent.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restuarent.opening_hours && restuarent.opening_hours.open_now,
    };
  });

  return camelize(mappedResult);
};
