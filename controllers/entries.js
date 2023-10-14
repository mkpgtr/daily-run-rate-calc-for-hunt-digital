const Entry = require('../model/Entry')

const getEntries = async(req,res)=>{


    try {
        
        const entries = await Entry.find({}).sort('-createdAt')
        res.status(200).json({data:entries})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const createEntries = async(req,res)=>{
    
    const {startDate,endDate,excludedDates,leadCount,numberOfDays,monthYear:{month,year},drr} = req.body;

    console.log(req.body)


    try {
        if(excludedDates?.length > 0){

            const entry = await Entry.create({startDate,endDate,leadCount,numberOfDays,monthYear:{month,year},drr,excludedDates})
            res.status(201).json({message: "entry created successfully",data:entry});   
            
        }else{
            
            const entry = await Entry.create({startDate,endDate,leadCount,numberOfDays,monthYear:{month,year},drr,excldedDates:[]})
            res.status(201).json({message: "entry created successfully",data:entry});   
        }
    } catch (error) {
        res.status(500).json({message: error.message});   
    }
}


module.exports = {getEntries,createEntries}