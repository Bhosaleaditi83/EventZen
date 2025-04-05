import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({

    name : {
        type : String,
        default : ""
    },
    image : [
        {
            type : String,
            default : ""
        }
   ],
    description : {
        type : String,
        default : ""
    },
    eventscategory : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'eventscategory'
        }
    ],
    subCategory : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'subCategory'
        }
    ],
    event_date : {
        type : Date,
        default : ""
    },
    eventcapacity : {
        type : Number,
        default : 0
    },
    price : {
        type : Number,
        default : 0
    },
    more_details : {
        type : Object,
        default : {}
    },
    publish : {
        type : Boolean,
        default : true
    }
},{
    timestamps : true
})

//create a text index
EventSchema.index({
    name  : "text",
    description : 'text'
},{
    name : 10,
    description : 5
})

const EventModel = mongoose.model('event',EventSchema)

export default EventModel