
'use strict'

const slsw = require('serverless-webpack');
const path = require('path');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    stats: 'minimal'
};

