"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import * as Realm from "realm-web";
type Props = {
  email?: string;
  password?: string;
  provider?: "emailPassword" | "apiKey";
  body: {};
  endpoint: string;
};

export default function useMongoDbApi({
  email = "",
  password = "",
  endpoint,
  body,
  provider = "apiKey",
}: Props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let config: any = {
        method: "post",
        url: `${process.env.URL_ENDPOINT}${endpoint}`,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
        },
        data: JSON.stringify(body),
      };

      if (provider === "emailPassword") {
        config.headers.Authorization =
          "Bearer " + (await getToken({ email, password }));
      } else if (provider === "apiKey") {
        config.headers["api-key"] = process.env.API_KEY;
      }

      try {
        const response = await axios(config);
        if (!response) {
          throw new Error("Failed to fetch data");
        }

        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []);
  return { data, loading, error };
}

async function getToken({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const app = new Realm.App({ id: process.env.REALM_APP_ID || "" });
  async function loginEmailPassword() {
    try {
      const credentials = Realm.Credentials.emailPassword(email, password);
      const user = await app.logIn(credentials);

      return user;
    } catch (error) {
      return null;
    }
  }
  try {
    const user = await loginEmailPassword();
    if (user === null) {
      return null;
    }

    return user.accessToken;
  } catch (error) {
    return null;
  }
}
