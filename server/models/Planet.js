import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Planet = new Schema (
    {
        name: {type: String, required: true },
        type: {type: String, required: true},
        star: { type: ObjectId, ref: "Star", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

export default Planet