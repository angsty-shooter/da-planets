import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Moon = new Schema (
    {
        name: {type: String, required: true },
        color: {type: String, required: true},
        planet: { type: ObjectId, ref: "Planet", required: true }

    },
    { timestamps: true, toJSON: { virtuals: true } }
)

export default Moon