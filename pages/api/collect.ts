import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { body } = req;

      console.log("api collect POST body", body);
      const { id, label, name, url, startTime, value } = body;
      const website_id = process.env.WEBSITE_ID;

      const webVital = await prisma.webvital.create({
        data: {
          webvital_id: id,
          website_id,
          url: "/test", //TODO
          name,
          start_time: startTime,
          value,
          label,
        },
      });

      res.status(200).json(webVital);
    }
  } catch (error) {
    res.status(500).json({ error: "Error collecting webvital" });
  }
}
