import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
  console.log('api try');
  try {
    const { db } = await connectToDatabase();
    //console.log(db);
    const post = await db.collection('prayers').insertOne({
      date: new Date(),
      prayer: req.body.prayer,
      sender: req.body.sender,
      status: 'new'
    });
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
}
