// Code your solution here


function findMatching(driver, name) {
    return driver.filter(
        (matching) => matching.toLowerCase() === name.toLowerCase());
    }
function fuzzyMatch(driver,name){

    return driver.filter(
        (matching)=>matching.charAt(0)===name.charAt(0));
    
}

function matchName(driver, match) {
    return driver.filter((drivers) => drivers.name === match);

}
