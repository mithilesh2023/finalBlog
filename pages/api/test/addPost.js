import connectMongo from '../../../utils/connectMongo';
import Post from '../../../models/postModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function post(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const post = await Post.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ post });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}