import mongoose from "mongoose";

const EventsCategorySchema = new mongoose.Schema({
    name : {
        type : String,
        default : ""
    },
    image : {
        type : String,
        default : ""
    }
},{
    timestamps : true
})

const EventCategoryModel = mongoose.model('eventscategory',EventsCategorySchema)

export default EventCategoryModel