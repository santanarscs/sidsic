

import type { NextApiRequest, NextApiResponse } from 'next'
import multer from 'multer';
import nextConnect from 'next-connect';
import csvParse from 'csv-parse/lib/sync';
import fs from 'fs';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.array('files');
apiRoute.use(uploadMiddleware);

type Response = {
  header: string[],
  data: any[]
}

// Process a POST request
apiRoute.post(async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const filePath = req.files[0].path
  const fileContent = await fs.promises.readFile(filePath);
  const data = csvParse(fileContent, {
    columns: true,
    delimiter: ';'
  });
 await fs.promises.unlink(filePath);

  res.status(200).json({
    header: Object.keys(data[0]),
    data
   });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};