"use server";

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
        filter: {},
      }),
    });

    const data: any = res.data.document;
    return data;
  } catch (error) {
    console.log("[_get]", error);
    return null;
  }
}
