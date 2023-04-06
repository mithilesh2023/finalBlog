import connectMongo from '../../../utils/connectMongo';
import Test from '../../../models/testModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function editTest(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('UPDATING DOCUMENT');
    const test = await Test.findByIdAndUpdate(req.body._id , req.body);
    console.log('UPDATING DOCUMENT');

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}