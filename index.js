/**
 * sorts AD group members by last name
 * @param {*} classList 
 */
function alphabetize(classList){
    classList.sort(function (a,b){
        let nameA = a.lastName.toUpperCase();
        let nameB = b.lastName.toUpperCase();

        if(nameA > nameB){
            return 1;
        }
        if(nameA < nameB){
            return -1;
        }
        return 0;
    });

    return classList;
}

module.exports = alphabetize;
