"use server";
import { tech } from "@/types";
import axios from "axios";
import { resume } from "@/types";
export async function getResume() {
  try {
    const res = await axios({
      method: "post",
      url: `${process.env.MONGO_API_URL}/action/findOne`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.MONGO_API_KEY,
      },
      data: JSON.stringify({
        dataSource: "Cluster0",
        database: "ResumeDB",
        collection: "Resume",
        filter: {
          _id: { $oid: "66030ded79f7da075b725bfa" },
        },
      }),
    });
    const data: resume = res.data.document;
    return data;
  } catch (error) {
    console.log("[_get]", error);
    return null;
  }
}
