//this is an example file to show that the data is loaded correctly

"use strict";

fetch("./sample2.json")
    .then(async function (resp) {
        let d = JSON.parse(await resp.json())
        let newVar = d
        // newVar can be manipulated look into examples below

        // newVar = newVar["H"]["920"]
        // newVar =  newVar["H"]["920"]["monday"]

        return newVar;
    })
    .then(function (data){
        console.log(data);
    })