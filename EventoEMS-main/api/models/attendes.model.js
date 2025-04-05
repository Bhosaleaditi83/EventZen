import mongoose from "mongoose";

const attendeeSchema = new mongoose.Schema({
    
    eventId : {
        type : mongoose.Schema.ObjectId,
        ref : "event"
    },
    bookingId : {
        type : mongoose.Schema.ObjectId,
        ref : "booking"
    },
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : "user"
    },

},{
    timestamps : true
})

const AttendeeModel = mongoose.model("attendee",attendeeSchema)

export default AttendeeModel