import express from 'express';
import Writer from './authorModel';
import Book from '../books/booksModel';

const router = express.Router();


// Get all writers
router.get('/', async (req: any, res: any) => {
    try {
        const writers = await Writer.find().populate('listOfBook');
        res.json(writers);
    } catch (err) {
        res.json({ message: err });
    }
});

// Submit a writer
router.post('/', async (req: any, res: any) => {
    const {
        firstName, lastName, yearOfBirth, listOfBook
    } = req.body;
    const writer = new Writer({
        firstName,
        lastName,
        yearOfBirth,
        listOfBook
    });
    try {
        const savedWriter = await writer.save();
        res.json(savedWriter);
    } catch (err) {
        res.json({ message: err });
    }
});
// Spesific writer
router.get('spesifi/:writerId', async (req: any, res: any) => {
    try {
        const writer = await Writer.findById(req.params.writerId);
        res.json(writer);
    } catch (err) {
        res.json({ message: err });
    }
});
// Delete writer
router.delete('delete/:writerId', async (req: any, res: any) => {
    try {
        const removedWriter = await Writer.remove({ _id: req.params.writerId });
        res.json(removedWriter);
    } catch (err) {
        res.json({ message: err });
    }
});
// Update a writer
router.patch('update/:writerId', async (req: any, res: any) => {
    try {
        const updatedWriter = await Writer.updateOne(
            { _id: req.params.writerId },
            { $set: { firstName: req.body.firstName } },
        );
        res.json(updatedWriter);
    } catch (err) {
        res.json({ message: err });
    }
});




router.get('/a/a', async (req: any, res: any) => {
    try {
        const writer = await Writer.aggregate([
            {
                $lookup: {
                    from: 'books',
                    localField: 'listOfBook',
                    foreignField: '_id',
                    as: 'books'
                }
            },
            {
                $match: {
                    'firstName': {
                        '$regex': new RegExp('^p.*$'),
                        '$options': 'i'
                    }
                }
            },
             {
                $unwind: {
                    'path': '$books'
                }
            }, {
                $match: {
                    'books.numberOfPage': {
                        '$gte': 200
                    },
                    'books.datePublicOfBook': {
                        '$gte': 1985,
                        '$lt': 2020
                    }
                }
            }, {
                '$project': {
                    'nameOfBook': '$books.nameOfBook',
                    'authorName': '$firstName'
                }
            }
        ]
        )
        res.json(writer);
    } catch (err) {
        res.json({ message: err });
    }
});


export default router;

