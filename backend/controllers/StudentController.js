const db = require('../config/db');


const getAllstudent = (req, res) => {
  db.query('SELECT * FROM student', (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch student' });
    res.json(results);
  });
};


const addstudent = (req, res) => {
  const { name, age, course } = req.body;
 

  if (!name || !age || !course) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  db.query(
    'INSERT INTO student (name, age, course) VALUES (?, ?, ?)',
    [name, age, course],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Failed to add student' });
      res.status(201).json({ message: 'Product added', studenttId: result.insertId });
    }
  );
};

const updatestudent = (req, res) => {
  const { id } = req.params;
  const { name, age, course } = req.body;

  const sql = 'UPDATE student SET name = ?, age = ?, course = ? WHERE id = ?';
  const values = [name, age, course, id];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to update student' });
    res.json({ message: 'Student updated successfully' });
  });
};


const deletestudent = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM student WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to delete student' });
    res.json({ message: 'student deleted' });
  });
};

module.exports = {
  getAllstudent,
  addstudent,
  updatestudent,
  deletestudent
};
