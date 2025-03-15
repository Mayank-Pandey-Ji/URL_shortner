import mongoose from "mongoose";
import validator from 'validator'
const Uschema = mongoose.Schema({
    url:{
        type : String,
        required : true,
        validate: {
            validator: (value) => validator.isURL(value, { protocols: ["http", "https"], require_protocol: true }),
            message: "Invalid URL format! Please enter a valid URL.",
          },
    },
    url_id: String
})

const Ushort = mongoose.model('Ushort' , Uschema);

export default Ushort;