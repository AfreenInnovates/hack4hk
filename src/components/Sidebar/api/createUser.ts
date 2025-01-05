import { BASE_URL } from '@/constants';
import axios from 'axios';

export type UserType = {
  username: string;
  fullName: string;
  imageUrl: string;
};

export const createUser = async (user: UserType) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    const resp = response.data;
    const users = resp[0].users;
    if (users.length > 0) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === user.username) {
          return {
            status: 400,
            data: [],
            message: 'User already exists',
          };
        }
      }
    }
    const userData = {
      username: user.username,
      name: user.fullName,
      Image: user.imageUrl,
      tasks: [
        {
          assignedToMe: [],
          createdByMe: [],
        },
      ],
      projects: [],
      notifications: [
        {
          unread: {
            count: 0,
            notifications: [],
          },
          read: {
            count: 0,
            notifications: [],
          },
        },
      ],
      organisations: [],
    };

    const postResponse = await axios.post(`${BASE_URL}/users`, userData);
    console.log('Postresponse ', postResponse);
  } catch (error) {
    console.log(error);
  }
};
