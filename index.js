/**
 * sorts AD group members by last name
 * @param {Array} classList list of objects representing AD user objects.
 */

function alphabetize(classList,cb){
    classList.sort(function (a,b){
        let nameA = a.sn.toUpperCase();
        let nameB = b.sn.toUpperCase();

        if(nameA > nameB){
            return 1;
        }
        if(nameA < nameB){
            return -1;
        }
        return 0;
    });

    cb(null,classList);
}

module.exports = alphabetize;
