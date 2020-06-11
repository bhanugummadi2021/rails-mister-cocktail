const { environment } = require('@rails/webpacker')

//Bootstrap 4 has dependency over jQuery and popper.js:

const webpack = require('webpack')
environment.plugins.prepend('Provide', 
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
    })
)

module.exports = environment
