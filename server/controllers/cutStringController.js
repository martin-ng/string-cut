const cutString = require("../helper/cutString");

exports.cut = (req, res) => {
  try {
    const { string_to_cut } = req.body;
    const result = cutString(string_to_cut);

    return res.status(200).send({ return_string: result });
  } catch (error) {
    console.log("error", error);
  }
};
