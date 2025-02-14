const { urlencoded } = require('express')
const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Nutritions = new Schema(
    {
        cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine' },
        calories: { type: Number, required: true },
        fat: { type: Number, required: true },
        carbs: { type: Number, required: true },
        protein: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Nutrition', Nutritions)