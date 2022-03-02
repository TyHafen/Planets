import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const GalaxySchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        size: { type: Number, required: true },
        creatorId: { type: ObjectId, ref: 'Profile', required: true },
    },
    { timestamps: true, toJSON: { virtuals: true } }

)

GalaxySchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Profile'
})