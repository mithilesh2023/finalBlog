import connectMongo from '../../../utils/connectMongo';
import Test from '../../../models/testModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getTest(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('GETTING DOCUMENT');
    const test = await Test.find();
    console.log('GETTING DOCUMENT');

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}