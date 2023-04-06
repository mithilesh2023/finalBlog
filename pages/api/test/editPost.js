import connectMongo from '../../../utils/connectMongo';
import Post from '../../../models/postModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function editPost(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('UPDATING DOCUMENT');
    const editpost = await Post.findByIdAndUpdate(req.body._id , req.body);
    console.log('UPDATING DOCUMENT');

    res.json({ editpost });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}