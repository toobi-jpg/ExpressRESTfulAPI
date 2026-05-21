import * as memberData from "../data/memberData.js";

export const getMemberById = async (id) => {
  const member = await memberData.findById(id);
  if (!member) return null;
  return {
    id: member.id,
    name: member.namn,
    instrument: member.Instrument,
  };
};

export const getMembersByDates = async (startDate, endDate) => {
  const members = await memberData.findByDates(startDate, endDate);
  return members.map((m) => ({
    id: m.id,
    name: m.namn,
    instrument: m.instrument,
    band_name: m.band_namn,
    start_date: m.startdatum,
    end_date: m.slutdatum,
  }));
};
