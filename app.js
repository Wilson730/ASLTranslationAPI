const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/translate", (req, res) => {
  const { text } = req.body;
  if (!text)
    return res.status(400).json({
      input: false,
      message: "No text given",
    });

  if (!/^[a-zA-Z]+$/.test(text)) {
    return res.status(400).json({
      input: false,
      message: "Text is not in english",
    });
  }
  const translation = `${text}`;

  res.status(200).json({
    input: true,
    translation,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
