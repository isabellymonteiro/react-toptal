import { CommentObject, User } from './interfaces'

export const data: CommentObject[] = [
  {
    id: 'first',
    author: 'vancejoy',
    commentText: "You can't get struck by lightning if your not standing in the rain",
    commentVotes: 4
  },
  {
    id: 'second',
    author: 'dualipa',
    commentText: "I should've stayed at home.",
    commentVotes: 6
  }
]

export const users: User[] = [
  {
    id: 'first',
    username: 'dualipa'
  },
  {
    id: 'second',
    username: 'vancejoy'
  }
]