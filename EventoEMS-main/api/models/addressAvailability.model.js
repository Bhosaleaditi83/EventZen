import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({

    addressId : {
        type : mongoose.Schema.ObjectId,
        ref : "address"
    },
    start_date : {
        type : String,
        default: ""
    },
    end_date : {
        type : String,
        default: ""
    },
    is_available : {
        type : Boolean,
        default: ""
    },
    date :{
        type : Date,
        default : ""
    }
},{
    timestamps : true
})

const AvailabilityModel = mongoose.model('VenueAvaiability',availabilitySchema)

export default AvailabilityModel