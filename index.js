// Code your solution in this file!
function distanceFromHqInBlocks(customerLocation) {
    let distanceBlocks = (42 - customerLocation );
    return distanceBlocks < 0 ? -distanceBlocks : distanceBlocks;
}

function distanceFromHqInFeet(customerLocation) {
    let distanceFeet = distanceFromHqInBlocks(customerLocation) * 264;
    return distanceFeet;
}

function distanceTravelledInFeet(customerLocation, destination) {
    let distanceTravelledInBlocks = customerLocation - destination;
    distanceTravelledInBlocks = distanceTravelledInBlocks < 0 ? -distanceTravelledInBlocks : distanceTravelledInBlocks;
    let distanceTravelled = distanceTravelledInBlocks * 264;
    return distanceTravelled;
}

function calculatesFarePrice(customerLocation, destination) {
    let distanceTravelled = distanceTravelledInFeet(customerLocation, destination);
    let farePrice;
    if (distanceTravelled <= 400) {
        farePrice = 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        farePrice = (distanceTravelled - 400) * .02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        farePrice = 25;
    } else {
        farePrice = 'cannot travel that far';
    }
    return farePrice;
}