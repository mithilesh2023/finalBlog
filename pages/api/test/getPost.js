import connectMongo from '../../../utils/connectMongo';
import Post from '../../../models/postModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getPost(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('GETTING DOCUMENT');
    const getpost = await Post.find();
    console.log('GETTING DOCUMENT');

    res.json({ getpost });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}