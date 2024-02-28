const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    };
}

function fareDoubler(fare){
       return fare * 2
}

function fareTripler(fare){
    return fare * 3
}


const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };




    
