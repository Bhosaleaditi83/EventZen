import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    
    registrationId : {
        type : String,
        default : ""
    },
    eventId : {
        type : mongoose.Schema.ObjectId,
        ref : "event"
    },
    tickettype : {
        type : String,
        default : ""
    },
    price : {
        type : Number,
        default : 0
    }

},{
    timestamps : true
})

const TicketModel = mongoose.model("ticket",ticketSchema)

export default TicketModel