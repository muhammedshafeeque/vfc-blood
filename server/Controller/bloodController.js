import { BLOOD_GROUPE } from "../Models/BloodGroupModal.js";
import xlsx from 'xlsx'
import fs from 'fs'

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

export const bloodBulkUpload = async (req, res, next) => {
  console.log(req.files)
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ success: false, message: 'File not uploaded' });
    }

    // Assuming only one file is uploaded, you may adjust this accordingly if multiple files are uploaded
    const uploadedFile = req.files.file;
    const filePath = '../Public' + uploadedFile.name;

    // Move the uploaded file to the desired location
    uploadedFile.mv(filePath, async (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error occurred while saving file' });
      }

      try {
        // Parse Excel file
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);

        // Save data to MongoDB
        for (const item of data) {
          const donor = new DONOR({
            name: item.name,
            dob: new Date(item.dob),
            weight: parseFloat(item.weight),
            blood: item.blood,
            location: item.location,
            mobile: item.mobile,
            lastDonate: new Date(item.lastDonate),
            status: item.status,
          });
          await donor.save();
        }

        res.status(200).json({ message: 'Data uploaded successfully' });
      } catch (error) {
        console.log(error);
        next(error);
      }

      // Delete the uploaded file after processing
      fs.unlink(filePath, (err) => {
        if (err) {
          next(err)
        }
      });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
