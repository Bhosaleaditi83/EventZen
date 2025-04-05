import EventModel from "../models/event.model.js";

export const createProductController = async(request,response)=>{
    try {
        const { 
            name ,
            image ,
            description,
            eventscategory,
            subCategory,
            event_date,
            eventcapacity,
            price,
            more_details,
        } = request.body 

        if(!name || !image[0] || !eventscategory[0] || !subCategory[0] || !eventcapacity || !price || !description ){
            return response.status(400).json({
                message : "Enter required fields",
                error : true,
                success : false
            })
        }

        const event = new EventModel({
            name ,
            image ,
            description,
            eventscategory,
            subCategory,
            event_date,
            eventcapacity,
            price,
            more_details,

        })
        const saveProduct = await event.save()

        return response.json({
            message : "Event Created Successfully",
            data : saveProduct,
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export const getProductController = async(request,response)=>{
    try {
        
        let { page, limit, search } = request.body 

        if(!page){
            page = 1
        }

        if(!limit){
            limit = 10
        }

        const query = search ? {
            $text : {
                $search : search
            }
        } : {}

        const skip = (page - 1) * limit

        const [data,totalCount] = await Promise.all([
            EventModel.find(query).sort({createdAt : -1 }).skip(skip).limit(limit).populate('eventscategory subCategory'),
            EventModel.countDocuments(query)
        ])

        return response.json({
            message : "Event data",
            error : false,
            success : true,
            totalCount : totalCount,
            totalNoPage : Math.ceil( totalCount / limit),
            data : data
        })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export const getProductByCategory = async(request,response)=>{
    try {
        const { id } = request.body 

        if(!id){
            return response.status(400).json({
                message : "provide event category id",
                error : true,
                success : false
            })
        }

        const event = await EventModel.find({ 
            eventscategory : { $in : id }
        }).limit(15)

        return response.json({
            message : "event category product list",
            data : event,
            error : false,
            success : true
        })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export const getProductByCategoryAndSubCategory  = async(request,response)=>{
    try {
        const { eventscategoryId,subCategoryId,page,limit } = request.body

        if(!eventscategoryId || !subCategoryId){
            return response.status(400).json({
                message : "Provide eventscategoryId and subCategoryId",
                error : true,
                success : false
            })
        }

        if(!page){
            page = 1
        }

        if(!limit){
            limit = 10
        }

        const query = {
            eventscategory : { $in :eventscategoryId  },
            subCategory : { $in : subCategoryId }
        }

        const skip = (page - 1) * limit

        const [data,dataCount] = await Promise.all([
            EventModel.find(query).sort({createdAt : -1 }).skip(skip).limit(limit),
            EventModel.countDocuments(query)
        ])

        return response.json({
            message : "Event list",
            data : data,
            totalCount : dataCount,
            page : page,
            limit : limit,
            success : true,
            error : false
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export const getProductDetails = async(request,response)=>{
    try {
        const { eventId } = request.body 

        const event = await EventModel.findOne({ _id : eventId })


        return response.json({
            message : "Event details",
            data : event,
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//update product
export const updateProductDetails = async(request,response)=>{
    try {
        const { _id } = request.body 

        if(!_id){
            return response.status(400).json({
                message : "provide event _id",
                error : true,
                success : false
            })
        }

        const updateProduct = await EventModel.updateOne({ _id : _id },{
            ...request.body
        })

        return response.json({
            message : "updated successfully",
            data : updateProduct,
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//delete product
export const deleteProductDetails = async(request,response)=>{
    try {
        const { _id } = request.body 

        if(!_id){
            return response.status(400).json({
                message : "provide _id ",
                error : true,
                success : false
            })
        }

        const deleteProduct = await EventModel.deleteOne({_id : _id })

        return response.json({
            message : "Delete successfully",
            error : false,
            success : true,
            data : deleteProduct
        })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//search product
export const searchProduct = async(request,response)=>{
    try {
        let { search, page , limit } = request.body 

        if(!page){
            page = 1
        }
        if(!limit){
            limit  = 10
        }

        const query = search ? {
            $text : {
                $search : search
            }
        } : {}

        const skip = ( page - 1) * limit

        const [data,dataCount] = await Promise.all([
            EventModel.find(query).sort({ createdAt  : -1 }).skip(skip).limit(limit).populate('eventscategory subCategory'),
            EventModel.countDocuments(query)
        ])

        return response.json({
            message : "Event data",
            error : false,
            success : true,
            data : data,
            totalCount :dataCount,
            totalPage : Math.ceil(dataCount/limit),
            page : page,
            limit : limit 
        })


    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}