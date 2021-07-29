const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            requred:true,
            unique:true
        },
        desc:{
            type:String,
            requred:true,
        },
        photo:{
            type:String,
            requred:false,
        },
        username:{
            type:String,
            requred:true,
        },
        categories:{
            type:Array,
            required: false
        }
    },
{timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema); 