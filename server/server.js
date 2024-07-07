import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
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

app.get("/categoryItems", async (req, res) => {
  const result = await db.query(`
    SELECT * FROM categories
    `);
  res.json(result.rows);
});

app.get("/trackNames", async (req, res) => {
  const result = await db.query(`
    SELECT * FROM categories
    `);
  res.json(result.rows);
});

//? I had joined tables through the cat_name in both messages and categories but feel this wasn't correct as it didn't have a join sql
// app.get("/userMsg", async (req, res) => {
//   const result = await db.query(
//     `SELECT username, cat_name, message, id FROM messages`
//   );
//   res.json(result.rows);
// });

app.get("/userMsg", async (req, res) => {
  const result = await db.query(
    `SELECT messages.id, messages.username, messages.message, categories.cat_name FROM messages
    JOIN
    categories ON messages.cat_id = categories.id`
  );
  res.json(result.rows);
});

app.post("/formInputs", async (req, res) => {
  const { username, message, cat_id } = req.body;
  // console.log("user_id", user_id);
  // select the user_id from the db where the username is the one we get from body
  // use THAT user_id in the below queries
  try {
    // await db.query(`INSERT into users (username) VALUES ($1 )`, [username]);
    await db.query(
      `INSERT into messages (username, message, cat_id) VALUES ($1, $2, $3)`,
      [username, message, cat_id]
    );
    // await db.query(`INSERT into categories (cat_name) VALUES ($1)`, [cat_name]);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("No data is getting inserted", error);
    res.status(500).json({ success: false });
  }
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
app.delete("/deleteformdata/:id", async (req, res) => {
  const msgId = req.params.id;
  const result = await db.query(
    `
  DELETE FROM messages WHERE id = $1 RETURNING *
  `,
    [msgId]
  );
  res.json({ success: true });
});
