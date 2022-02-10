import logicalPassword from './scripts/logicalPassword.js';
import logicalLogout from './scripts/logicalLogout.js';
import logicalClock from './scripts/logicalClock.js';
import logicalClimate from './scripts/logicalClimate.js';

logicalPassword();   
logicalLogout();
setInterval(() => {
    logicalClock();
}, 1000);
logicalClimate();   