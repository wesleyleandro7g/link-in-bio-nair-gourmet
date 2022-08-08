import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const readImages = (req: NextApiRequest, res: NextApiResponse) => {
  const dirRelativeToPublicFolder = "static";

  const dir = path.resolve("./public", dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map((name) =>
    path.join("/", dirRelativeToPublicFolder, name)
  );

  res.status(200).json(images);
};

export default readImages;
