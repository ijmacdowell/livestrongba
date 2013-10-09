module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'prod':
        return {
          'cookieSecret': 'livestrong-cancerhacks'
        };
        case 'stagging':
        return {
          'cookieSecret': 'livestrong-cancerhacks'
        };
        case 'test':
        return {
          'cookieSecret': 'livestrong-cancerhacks'
        };
        case 'dev':
        return {
          'cookieSecret': 'dummy'
        };
        default :
        return {
          'cookieSecret': 'dummy'
        };
    }
};