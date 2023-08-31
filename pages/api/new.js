import client from "@/util/database";

export default async function handler(req, res) {
  if(req.method == 'GET')
    return res.status(200).json('꺼져');
  if(req.body.singer==='이선희')  
    return res.status(200).json('이선희 안받아요.')
  
  const db = await client.db('culture');
  const ack = await db.collection('music').insertOne(req.body);
  
  let msg = '';
  if(ack.acknowledged)
    msg = 'Success'
  else
    msg = 'Fail'
  res.redirect(302, `/message/${msg}`);

}