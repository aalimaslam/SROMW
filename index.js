const Logger = require('simple-logger');
const logger = new Logger({type: 'file', level: 'info', pathToLog:"../logs"});


logger.info('Hello, world!');


