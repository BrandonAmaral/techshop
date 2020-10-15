import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

// Create User
usersRouter.post('/create-user', async (request, response) => {
  try {
    const { username, email, password } = request.body;

    const createNewUser = new CreateUserService();

    const user = await createNewUser.execute({
      username,
      email,
      password,
      hasAdmin: false,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

// Create Admin
usersRouter.post('/create-admin', async (request, response) => {
  try {
    const { username, email, password } = request.body;

    const createNewUser = new CreateUserService();

    const user = await createNewUser.execute({
      username,
      email,
      password,
      hasAdmin: true,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
