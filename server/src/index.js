import express from 'express';
import mongoose, { Schema } from 'mongoose';
import cors from 'cors';

async function connectDB() {
    await mongoose.connect('mongodb+srv://ayushbasak0210:ayushbasak@cluster0.mwecq3j.mongodb.net/');
}

connectDB().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

const dataSchema = new Schema({
    item: String,
    date: Date,
    amount: Number,
    category: String,
    split: String,
});

const Data = mongoose.model('Data', dataSchema);

const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.post('/api/v1/dataupload', (req, res) => {
    const { item, date, amount, category, split } = req.body;
    const newData = new Data({
        item,
        date,
        amount,
        category,
        split,
    });
    newData.save();
    res.send('Data uploaded');
});