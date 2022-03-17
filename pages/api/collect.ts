import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const website_id = process.env.WEBSITE_ID;

      const { webvital_id, label, name, start_time, value, url } = JSON.parse(
        req.body
      );

      const data = {
        webvital_id,
        website_id: Number(website_id),
        url,
        name,
        start_time: parseFloat(start_time),
        value: parseFloat(value),
        label,
      };

      const webVital = await prisma.webvital.create({
        data,
      });
      res.status(200).json(webVital);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
