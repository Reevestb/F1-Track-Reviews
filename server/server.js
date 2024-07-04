import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const PORT = 7430;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));

app.get("/", function (request, response) {
  response.json({ message: "this is the root route. How roude!" });
});

//endpoints
// Get enpoint --> we need to SELECT data from the database
//POST endpoint --> we recieve the body from the client and we INSERT the body into the database.

//! STRETCH GOALS: UPDATE and DELETE endpoints

//? UPDATE example - use dynamic url's (:id <-- in example below)
// app.put("/updateFormData:id", async (req, res) => {
//   const id = req.params.id;
//   const result = await db.query(
//     `UPDATE tablename SET column_name = $1 WHERE id = $2 RETURNING *`,
//     [data_one, id]
//   );
//   res.json(result.rows);
// });

//? DELETE examples - use dynamic url
// app.delete("/deletFormData:id", async (req, res) => {
//   const id = req.params.id;
//   const result = await db.query(
//     `DELETE FROM tablename WHERE id = $1 RETURNING * `,
//     [id]
//   );
//   res.json(result.rows);
// });
