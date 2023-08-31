export default function New() {
  return(
    <div>
      <center>
        <h3>Registration</h3>
      </center>
      <form action='/api/new' method="post">
        <div className="new">
          <div className="new-item">
            <label>Title: </label>
            <input name="title" type="text"/>
          </div>
          <div className="new-item">
            <label>Singer: </label>
            <input name="singer" type="text"/>
          </div>
          <div className="new-item">
            <label>Release Date: </label>
            <input name="release_date" type="text"/>
          </div>
          <button style={{margin:"10px"}} type="submit">Registration</button>
        </div>
      </form>
    </div>
  )
}