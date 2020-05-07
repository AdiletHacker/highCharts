const mongoose = require("mongoose");





const highchartsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    data: {
        type: [[ String | Number ]],
        require: true
    } 
});




module.exports = mongoose.model("Highcharts", highchartsSchema);





