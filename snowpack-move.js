module.exports = function (snowpackConfig, pluginOptions) {
    return {
        name: 'snowpack-move',
        config() {
            const ncp = require('ncp').ncp;
            const path = require('path');

            ncp(path.join(__dirname, '/build'), path.join(__dirname, '/scripts'), (err) => {
                if (err) {
                    console.error(err);
                }
                console.log("Builds have been moved!");
            });
        }
    }
}