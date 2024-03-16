import { LOCATION } from "../Models/LocationModal.js";

export const createLocation = async (req, res, next) => {
  try {
    await LOCATION.create(req.body);
    res.send("Location Created Successfully");
  } catch (error) {
    next(error);
  }
};


export const searchLocation = async (req, res, next) => {
    try {
        let keywords = {};
        if (req.query.query) {
            keywords = {
                $or: [{ name: { $regex: req.query.query, $options: "i" } }]
            };
        }
        let options = {
            limit: parseInt(req.query.limit) || 10,
            skip: parseInt(req.query.skip) || 0
        };
        let locations = await LOCATION.find(keywords)
                                     .limit(options.limit)
                                     .skip(options.skip);
        res.send(locations);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
