// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, i, newPresetArray) => {

    if (requestType == 'GET' || requestType == 'PUT') {
        if (!presets[i]) {
            return [404];
        } else {
            if (requestType === 'GET') {
            return [200, presets[i]]; 
            } else if (requestType === 'PUT') {
                presets[i] = newPresetArray;
            return [200, presets[i]]; 
            }
        }
    } else {
        return [400];
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
