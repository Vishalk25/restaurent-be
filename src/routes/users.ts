import { Router, type Request, type Response } from 'express';

const router = Router();

interface User {
    id: string;
    name: string;
}

interface CreateUserBody {
    name: string;
}

// GET /users
router.get('/', (req: Request, res: Response<User[]>) => {
    res.json([{ id: '1', name: 'John Doe' }]);
});

// GET /users/:id
router.get('/:id', (req: Request<{ id: string }>, res: Response) => {
    res.json({ userId: req.params.id });
});

// POST /users
router.post(
    '/',
    (req: Request<{}, {}, CreateUserBody>, res: Response) => {
        const { name } = req.body;
        res.status(201).json({ message: `User ${name} created` });
    }
);

export default router;