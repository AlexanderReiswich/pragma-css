var fs = require('fs');
var path = require('path');
var cache = {};

module.exports = {
    load: function(name) {
        if (!cache[name]) {
            try {
                cache[name] = fs.readFileSync(this.getFilePath(name), 'utf-8');
            } catch(e) {
                throw new Error(name + ' does not exist');
            }
        }
        return cache[name];
    },
    pathTo: function(name) {
        return path.resolve(__dirname, 'src', name + '.styl');
    }
};
