# Task

Inside `matchmake.js`, there is a matchmake scoring criterias and their respective weighting. You will be writing a function to calculate the compatibility scores between applicants and advisors

There is a rule
- if an applicant's `certainCriteria` is equal to advisor's `certainCriteriaPrev`, the pair gets the `certainCriteriaPrev` score

Example:
applicant:
```
{
    "postgradUni": "cambridge",
    "undergradField": "Computer Science"
}
```
advisor:
```
{
    "postgradUniPrev": "cambtidge",
    "undergradField": "Computer Science"
}
```

These two pair will obtain the score of 55, (50 from `postgradUniPrev`, and 5 from `undergradField`)

Please also write test cases for this function