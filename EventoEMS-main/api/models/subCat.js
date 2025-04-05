import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema({
    name : {
        type : String,
        default : ""
    },
    image : {
        type : String,
        default : ""
    },
    eventscategory : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "eventscategory"
        }
    ]
},{
    timestamps : true
})

const SubCategoryModel = mongoose.model('subCategory',SubCategorySchema)

export default SubCategoryModel