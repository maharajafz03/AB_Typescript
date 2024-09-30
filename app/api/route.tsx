import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    // Validate inputs
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
      // Create a new user in the database
      const newUser = await prisma.user.create({
        data: { name, email },
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
