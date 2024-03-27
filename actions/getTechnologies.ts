"use server";
import { tech } from "@/types";
import axios from "axios";

export async function getTechnologies() {
  try {
    const res = await axios({
      method: "post",
      url: `${process.env.MONGO_API_URL}/action/find`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.MONGO_API_KEY,
      },
      data: JSON.stringify({
        dataSource: "Cluster0",
        database: "PortfolioDB",
        collection: "Technologies",
        filter: {},
      }),
    });
    const data: tech[] = res.data.documents;
    return data;
  } catch (error) {
    console.log("[_get]", error);
    return null;
  }
}
