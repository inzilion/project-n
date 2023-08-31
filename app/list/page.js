import client from "@/util/database"
import Link from "next/link";

export default async function List() {
  const db = await client.db('culture');
  const list = await db.collection('music').find().toArray();
  
  return (
    <div className="list-bg">
    {
      list.map(e =>
        <div className="list-item">
          <Link href={`/detail/${e._id}`}>
            <p>{e.title}</p>
          </Link>
        </div>
      )
    }
    </div>
  )
}