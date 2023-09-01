import client from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = await client.db('culture');
  const result = await db.collection('music').findOne({"_id": new ObjectId(props.params.id)})
  console.log(result);
  return(
    <div>
      <center>
        <h3>Edit</h3>
      </center>
      <form action='/api/edit' method="post">
        <div className="new">
          <div className="new-item">
            <label>Title: </label>
            <input name="title" type="text" defaultValue={result.title}/>
          </div>
          <div className="new-item">
            <label>Singer: </label>
            <input name="singer" type="text" defaultValue={result.singer}/>
          </div>
          <div className="new-item">
            <label>Release Date: </label>
            <input name="release_date" type="text" defaultValue={result.release_date}/>
          </div>
          <div>
            <input type="hidden" name="_id" value={result._id}></input>
          </div>
          <button style={{margin:"10px"}} type="submit">Edit</button>
        </div>
      </form>
    </div>
  )
}