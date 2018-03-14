/*******************************************************************************
 *
 *    ADOBE CONFIDENTIAL
 *    ___________________
 *
 *    Copyright 2018 Adobe Systems Incorporated
 *    All Rights Reserved.
 *
 *    NOTICE:  All information contained herein is, and remains
 *    the property of Adobe Systems Incorporated and its suppliers,
 *    if any.  The intellectual and technical concepts contained
 *    herein are proprietary to Adobe Systems Incorporated and its
 *    suppliers and are protected by all applicable intellectual property
 *    laws, including trade secret and copyright laws.
 *    Dissemination of this information or reproduction of this material
 *    is strictly forbidden unless prior written permission is obtained
 *    from Adobe Systems Incorporated.
 *
 ******************************************************************************/
'use strict'

const slsw = require('serverless-webpack');
const path = require('path');

module.exports = {
    entry: slsw.lib.entries,
   // devtool: 'source-map',
    target: 'node',
    stats: 'minimal'
    /*output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, '.webpack'),
        filename: '[name].js'
    }*/
};

