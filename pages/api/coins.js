import dbConnect from "../../utils/dbConnect";
import Coins from "../../models/Coin";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const coins = await Coins.find();
        res.status(200).json({ success: true, data: coins });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const coin = await Coins.create(JSON.parse(req.body));
        res.status(201).json({ success: true, data: coin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
