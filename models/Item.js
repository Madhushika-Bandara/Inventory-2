const{Schema, model}=require("mongoose");

const ItemSchema = new Schema({
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
const Item = model("Item", ItemSchema);
module.exports = Item;