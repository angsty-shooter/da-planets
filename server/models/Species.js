import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Species = new Schema (
    {
        name: {type: String, required: true },
        isBiped: {type: Boolean, default: false},
        moon: {type: ObjectId, ref: "Moon", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

export default Species