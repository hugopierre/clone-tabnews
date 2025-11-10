import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 2 + 0 as sum;");
  console.log(result.rows);
  response.status(200).json({ status: "ok", result: result.rows });
}

export default status;
