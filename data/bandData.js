import { getConnection } from "../config/database.js";

export const findAll = async (minPrice, maxPrice) => {
  const db = getConnection();
  let query = "SELECT * FROM Band";
  const params = [];
  const conditions = [];

  if (minPrice !== undefined && minPrice !== null && !isNaN(minPrice)) {
    conditions.push("bokningspris >= ?");
    params.push(Number(minPrice));
  }
  if (maxPrice !== undefined && maxPrice !== null && !isNaN(maxPrice)) {
    conditions.push("bokningspris <= ?");
    params.push(Number(maxPrice));
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  const [rows] = await db.execute(query, params);
  return rows;
};

export const findById = async (id) => {
  const db = getConnection();
  const [rows] = await db.execute("SELECT * FROM Band WHERE id = ?", [id]);
  return rows[0];
};

export const findMembers = async (bandId) => {
  const db = getConnection();
  const [rows] = await db.execute(
    "SELECT m.id, m.namn, m.Instrument as instrument, ms.startdatum, ms.slutdatum FROM Musiker m JOIN Medlemskap ms ON m.id = ms.musiker_id WHERE ms.band_id = ?",
    [bandId]
  );
  return rows;
};

