const assert = require("chai").assert;
const matchmaker = require('../matchmake.js')

//Criteria Points
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

//Test Data Group 1 -> Situation where one of applicant's crtieria matches advisor's criteria
const applicant_test1 = {
    "postgradUni": "cambridge",
    "undergradField": "Computer Science"
};

const advisor_test1 = {
    "postgradUni": "cambridge",
    "undergradField": "Computer Science"
};

//Test Data Group 2 -> Situation where one of applicant's criteria matches advisor's previous criteria


const applicant_test2 = {
    "postgradUni": "cambridge",
    "postgradField": "Computer Science"
};

const advisor_test2 = {
    "postgradUniPrev": "cambridge",
    "postgradFieldPrev": "Computer Science"
};

//Test Data Group 3 -> Situation where one of applicant's criteria matches both advisor's criteria and advisor's previous criteria

const applicant_test3 = {
    "postgradUni": "cambridge",

};

const advisor_test3 = {
    "postgradUni": "cambridge",
    "postgradUniPrev": "cambridge"
};

/*Test Data Group 4 -> Situation where one of the applicant criteria matches with the advisor's criteria, and another applicant criteria
  matches with both advisor criteria and advisor previous criteria
*/
const applicant_test4 = {
    "postgradUni": "cambridge",
    "undergradUni": "unimas"

};

const advisor_test4 = {
    "postgradUni": "cambridge",
    "postgradUniPrev": "cambridge",
    "undergradUni": "unimas",
};
//Test Data Group 5 -> Situation where NONE of the applicants criteria match with the advisor's criteria or previous criteria

const applicant_test5 = {
    "postgradUni": "oxford",
    "undergradUni": "sheffield"

};

const advisor_test5 = {
    "postgradUni": "cambridge",
    "postgradUniPrev": "cambridge"
};

describe('Matchmaker', function(){
    it ('should recognise when applicant criteria matches advisor criteria', function(){
        assert.equal(matchmaker(applicant_test1, advisor_test1), 15);
    })

    it('should recognise when applicant criteria matches advisor previous criteria', function(){
        assert.equal(matchmaker(applicant_test2, advisor_test2), 40);
    })

    it('should recognise when applicant criteria matches both advisor criteria and previous criteria', function(){
        assert.equal(matchmaker(applicant_test3, advisor_test3), 20);
    })

    it('should recognise where one applicant criteria matches advisor criteria, and another applicant criteria matches both advisor previous and current criteria', function(){
        assert.equal(matchmaker(applicant_test4, advisor_test4), 23);
    })

    it('should recognise when none of the criteria are the same', function(){
        assert.equal(matchmaker(applicant_test5, advisor_test5), 0);
    })
})