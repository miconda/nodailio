/**
 * NODAILIO - fully fledged AI SIP server in NODE.js
 * - AI inside NODAILIO stands for Arcticficial Inteligence
 * - leverages the ultimate Machine Learning engine of NODE.js, aka `exec`,
 *   to suck all the features of Kamailio SIP server in no time with
 *   a fast learning system done at startup
 * - it supports all command line parameters of Kamailio, available now
 *   or **in the future**
 * - RELEASE DATE: Apr 1, 2018
 * - RELEASE VERSION: FINAL
 */


const { exec } = require('child_process');

var kamcmd = 'kamailio';

for(let j = 2; j < process.argv.length; j++) {
	kamcmd = kamcmd + ' ' + process.argv[j];
}

kamrun = exec(kamcmd);

kamrun.stdout.on('data', (data) => {
	console.log(`${data}`);
});

kamrun.stderr.on('data', (data) => {
	console.log(`${data}`);
});

kamrun.on('close', (code) => {
	console.log(`running code: ${code}`);
});
