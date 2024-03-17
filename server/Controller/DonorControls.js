import { BLOOD_GROUPE } from "../Models/BloodGroupModal.js";
import { DONOR } from "../Models/DonorModal.js";
import moment from 'moment';
export const createDonor = async (req, res, next) => {
  try {
    req.body.status='active'
    await DONOR.create(req.body);
    res.send({ message: "Donor Created Successfully" });
  } catch (error) {
    next(error);
  }
};

export const getDonor = async (req, res, next) => {
  try {
    let query = req.query;
    let keywords={}
    if(query.groupName){
      let key=''
      if(query.groupName.includes('-')){
        key=query.groupName
      
      }else{
        key=query.groupName+'+'
        key=key.replace(/\s/g, '')
      }
      let group=await BLOOD_GROUPE.findOne({name:key})
      if(group){
        keywords.blood=group._id
      }else{
        throw {status:400,message:'group not Fount'}
      }
    }
    query.group&&(keywords.blood=query.group)
    query.location&&(keywords.location=query.location)
    let options = {
      limit: parseInt(query.limit) || 10,
      skip: parseInt(query.skip) || 0 
    };
    let donors = await DONOR.find(keywords)
      .limit(options.limit)
      .skip(options.skip).populate('blood').populate('location')
      
      let formattedDonors = donors.map(donor => ({
        name: donor.name,
        Age: moment().diff(donor.dob, 'years'), 
        Wight: donor.weight,
        blood: donor.blood.name, 
        location: donor.location.name, 
        mobile: donor.mobile,
        lastDonate: moment(donor.lastDonate).format('YYYY-MM-DD'),
        status: donor.status
      }));
  
      res.json(formattedDonors);
  } catch (error) {
    next(error);
  }
};

