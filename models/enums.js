exports.WORKER_ROLES = {
  MAINTENANCE_PERSON: 'maintenance',
  RECEPTIONIST:  'receptionist'
};

exports.GENDER = {
  MALE: 'male',
  FEMALE: 'female'
};

exports.COMPLAINT_STATUS = {
  STILL_NOT_APPROVED: 'still not approved',
  APPROVED_STILL_NOT_HANDLED: 'approved but still not handled',
  HANDLING_THE_COMPLAINT: 'handling the complaint',
  HANDLED: "complaint wad handled"
};


exports.EMAIL_REGEX = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
exports.PHONE_NUMBER_REGEX = /^(\d|-)+$/;
