import * as bandData from "../data/bandData.js";

export const getAllBands = async (minPrice, maxPrice) => {
  const bands = await bandData.findAll(minPrice, maxPrice);
  return bands.map(formatBand);
};

export const getBandById = async (id) => {
  const band = await bandData.findById(id);
  if (!band) return null;
  return formatBand(band);
};

export const getBandMembers = async (id) => {
  const band = await bandData.findById(id);
  if (!band) return null;
  const members = await bandData.findMembers(id);
  return {
    band_name: band.namn,
    members: members.map((m) => ({
      id: m.id,
      name: m.namn,
      instrument: m.instrument,
      start_date: m.startdatum,
      end_date: m.slutdatum,
    })),
  };
};

const formatBand = (band) => ({
  id: band.id,
  name: band.namn,
  booking_price: band.bokningspris,
});

