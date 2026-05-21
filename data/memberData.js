import { getConnection } from "../config/database.js";

export const findById = async (id) => {
  const db = getConnection();
  const [rows] = await db.execute("SELECT * FROM Musiker WHERE id = ?", [id]);
  return rows[0];
};

export const findByDates = async (startDate, endDate) => {
  const db = getConnection();
  let query = "SELECT m.id, m.namn, m.Instrument as instrument, ms.startdatum, ms.slutdatum, b.namn as band_namn FROM Musiker m JOIN Medlemskap ms ON m.id = ms.musiker_id JOIN Band b ON b.id = ms.band_id";
  const params = [];
  const conditions = [];

  if (startDate) {
    conditions.push("ms.startdatum >= ?");
    params.push(startDate);
  }
  if (endDate) {
    conditions.push("(ms.slutdatum <= ? OR ms.slutdatum IS NULL)");
    params.push(endDate);
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  const [rows] = await db.execute(query, params);
  return rows;
};
