"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");

/**
 * @typedef {object} NSFW
 * @see {NSFW}
 * @example const nsfw = new NSFW()
 * @type {Class}
 */
module.exports = class NSFW {
  constructor(options) {}

/**
 * https://discord.gg/luppux
 * @description It allows you to capture the specified NSFW category via the API, and the "image" object structure is returned via the API.
 * @param {string} type NSFW Category.
 * @returns {object}
 * @example await NSFW.fetch("ass")
 * @async
 */

fetch(type){
try{
return axios.get(`https://nsfwhub.onrender.com/nsfw?type=${type}`)
.then((res) => res.data)
}catch(err){ }
}

  
};