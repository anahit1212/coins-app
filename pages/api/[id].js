import dbConnect from "../../utils/dbConnect";
import Coins from "../../models/Coin";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      console.log("get idddd issss", id);
      try {
        const coin = await Coins.findById(id);

        if (!coin) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: coin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const coin = await Coinf.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!coin) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: coin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        console.log("delete idddd issss", id);
        const deletedCoin = await Coins.deleteOne({ _id: id });

        if (!deletedCoin) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    default:
      return res.status(400).json({ success: false });
      break;
  }
};
