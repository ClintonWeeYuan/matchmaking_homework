const criteria = {
    postgradUni				:10,
    postgradField			:30,
    postgradType			:20,
    postgradProgramTitle	:50,
    postgradUniPrev			:10,
    postgradFieldPrev		:30,
    postgradTypePrev		:20,
    postgradProgramTitlePrev:50,
    undergradCountry		:2,
    undergradField			:5,
    undergradUni			:3,
    undergradProgramTitle	:10
};

const applicant = {
    "postgradUni": "cambridge",
    "undergradField": "Computer Science"
};

const advisor = {
    "postgradUniPrev": "cambridge",
    "undergradField": "Computer Science"
};

module.exports = function(applicant, advisor) {
    let score = 0;
    const applicant_keys = Object.keys(applicant);

    for (let key of applicant_keys){
      if (applicant[key] === advisor[key]){
        score += criteria[key];

        if(applicant[key] === advisor[key + 'Prev'])
        score += criteria[key + 'Prev'];
      }

      else if (applicant[key] === advisor[key + 'Prev']){
        score += criteria[key + 'Prev'];
      }

      else{
        continue;
      }
    }

    return score; //TODO code your function here
}


