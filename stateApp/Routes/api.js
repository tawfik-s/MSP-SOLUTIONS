const express = require('express');
const router = express.Router();
const pool = require("../db");


//insert
router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        await pool.query(
            "INSERT INTO table1 (id,state,title) values (?,?,?)",
            [req.body.id, req.body.state, req.body.title]);
        res.json("machine is added");

    } catch (err) {
        console.error(err.message);
        res.json("invalid input due to duplicate entry some one has the same id");
    }
});

//get all data
router.get("/", async (req, res) => {
    try {
        const table1 = await pool.query("SELECT id , state , title FROM table1");
        console.log(table1);
        res.json(table1[0]);
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: 'error!' });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const table1 = await pool.query("SELECT id , state , title FROM table1 where id=?", [req.params.id]);
        console.log(table1);
        res.json(table1[0]);
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: 'error!' });
    }
});
//update
router.put("/:id", async (req, res) => {
    try {
        const table1 = await pool.query("SELECT id , state , title FROM table1 where id=?", [req.params.id]);
        console.log(table1);
        if (req.body.state == "archived" || (table1.state == "draft" && req.body.state == "active")
            || (table1.state == "active" && req.body.state == "done")) {
            await pool.query(
                "UPDATE table1 SET state= ? WHERE id = ?",
                [req.body.state, req.params.id]
            );
            res.json("table1 was updated");
        }
        res.json("table1 can't updated");
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: 'error!' });
    }
});
//delete Element
router.delete("/:id", async (req, res) => {
    try {

        await pool.query("DELETE FROM table1 WHERE id = ?", [req.params.id]);

        res.json("table1 was deleted");
    } catch (err) {
        console.error(err.message);
        res.status(400).send({ message: 'error!' });
    }
});

router.get('/create-table', function (req, res) {
    pool.connect(function (err) {
        if (err) throw err;

        const sql = `
CREATE TABLE IF NOT EXISTS table1(
id int(11) NOT NULL,
state varchar(15) DEFAULT NULL,
title varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1  `;
        pool.query(sql, function (err, result) {
            if (err) throw err;
            res.send("numbers table created");
        });
    });
})

module.exports = router;