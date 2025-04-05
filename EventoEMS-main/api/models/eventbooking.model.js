import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    userId : {
        type : mongoose.Schema.ObjectId,
        ref : "user"
    },
    eventId : {
        type : mongoose.Schema.ObjectId,
        ref : "event"
    },
    bookingId : {
        type : String,
        required : [true, "Provide bookingId"],
        unique : true
    }, 
    quantity: {
        type: Number,
        default: 0
    },
    subTotalAmt : {
        type : Number,
        default: 0
    },
    paymentId : {
        type : String,
        default : ""
    },  
    payment_status : {
        type : String,
        default: ""
    },
    invoice_receipt :{
        type : String,
        default : ""
    }
},{
    timestamps : true
})

const BookingModel = mongoose.model('booking',bookingSchema)

export default BookingModel