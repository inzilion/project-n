import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = await client.db('culture');
  const doc =  await db.collection('music').findOne({"_id": new ObjectId(props.params.id)})
  return (
    <div className="detail">
      <p>title : {doc.title}</p>
      <p>singer : {doc.singer}</p>
      <p>release : {doc.release_date}</p>
    </div>
  )
}