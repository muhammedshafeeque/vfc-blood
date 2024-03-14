import { BLOOD_GROUPE } from "../Models/BloodGroupModal.js";

export const createBloodGroupe = async (req, res,next) => {
  try {
    let blood_groupe = await BLOOD_GROUPE.findOne({
      name: req.body.name,
    });
    if (blood_groupe) {
      next({ status: 400, message: "Blood Groupe Already exist" });
    } else {
      await BLOOD_GROUPE.create(req.body);
      res.send("Blood Groupe Created Successfully");
    }
  } catch (error) {
    next(error);
  }
};
export const getBloodGroupe=async(req,res,next)=>{
    try {
        let bloodGroups=await BLOOD_GROUPE.find({})
        res.send(bloodGroups)
    } catch (error) {
        next(error);
    }
}
