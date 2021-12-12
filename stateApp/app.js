const express=require("express");
const app=express();
const cors=require("cors");
const pool=require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body


app.post("/api",async(req,res)=>{
  try{
    console.log(req.body);
    await pool.query(
        "INSERT INTO table1 (id,state,title) values (?,?,?)",
        [req.body.id,req.body.state,req.body.title]);
    res.json("machine is added");

  }catch (err){
    console.error(err.message);
    res.json("invalid input due to duplicate entry some one has the same id");
  }
});
//get all data
app.get("/api", async (req, res) => {
  try {
    const table1 = await pool.query("SELECT id , state , title FROM table1");
    console.log(table1);
    res.json(table1[0]);
  } catch (err) {
    console.error(err.message);
    res.status(400).send({message: 'error!' });
  }
});
app.get("/api/:id", async (req, res) => {
  try {
    const table1 = await pool.query("SELECT id , state , title FROM table1 where id=?",[req.params.id]);
    console.log(table1);
    res.json(table1[0]);
  } catch (err) {
    console.error(err.message);
    res.status(400).send({message: 'error!' });
  }
});
//update
app.put("/api/:id",async (req,res)=>{
  try{
    const table1 = await pool.query("SELECT id , state , title FROM table1 where id=?",[req.params.id]);
    console.log(table1);
    if(req.body.state=="archived"||(table1.state=="draft"&&req.body.state=="active")
    ||(table1.state=="active"&&req.body.state=="done"))
    {
       await pool.query(
        "UPDATE table1 SET state= ? WHERE id = ?",
        [req.body.state, req.params.id]
    );
       res.json("table1 was updated");
    }
    res.json("table1 can't updated");
  }catch (err) {
    console.error(err.message);
    res.status(400).send({message: 'error!' });
  }
});
//delete Element
app.delete("/api/:id", async (req, res) => {
  try {

     await pool.query("DELETE FROM table1 WHERE id = ?", [req.params.id]);

    res.json("table1 was deleted");
  } catch (err) {
    console.error(err.message);
    res.status(400).send({message: 'error!' });
  }
});


app.listen(3000,()=>{
  console.log("server is running on port 3000")
});
