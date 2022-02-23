// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42) {
        return blocks - 42;
    }
    else {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    if (blocks >= 42) {
        let b = blocks - 42;
        return b * 264;
    }
    else {
        let b = 42 - blocks;
        return b * 264
    }
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    }
    else if (start > destination) {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(distanceTravelledInFeet(start, destination));
    console.log("==========================================================")
    console.log(distance);

    if (distance < 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return 'cannot travel that far'
    }

}