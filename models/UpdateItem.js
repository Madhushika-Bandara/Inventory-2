const{Schema, model}=require("mongoose");

const UpadateItemSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        quantity:{
            type: Number,
            required: true,
        }
    },
    {
        timetamps: true
    }
);

//export model
const UpdatedItem = model("UpdatedItem", ItemSchema);
module.exports = UpdatedItem;