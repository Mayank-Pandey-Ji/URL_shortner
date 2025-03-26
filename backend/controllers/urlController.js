import Ushort from "../Models/URLmodel.js";
import { nanoid } from "nanoid"; // nanoid ka correct import

export const uploadURL = async (req, res) => { 
    const url_id = nanoid(7); // thala for a reason 
    const { url } = req.body;
    
    try {
        const urlshort = await Ushort.create({
            url,
            url_id
        });

        res.status(200).json({
            id : `https://url-shortner-1-jiqo.onrender.com/${urlshort.url_id}`
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message  // `err` ko `.message` se send karo
        });
    }
};

export const getUrl = async (req ,res)=>{
    const {id} = req.params;
    const urlshort = await Ushort.findOne({url_id:id})
    if(! urlshort)
    {
        return res.status(404).json({
            status: 'not found',
            message : "Seems Like You hav'nt shorten this URL yet , please shorten it first!"
        })
    }
    res.redirect(urlshort.url);
    // res.status(200).json({
    //     status:'success',
    //     url : urlshort.url
    // })
}