import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  blogs: [
    {
      tags: [],
      published: true,
      _id: '6008c2018140b40015c4e3ea',
      title: 'Why the Milano is better',
      body: 'I will destroy you in the gulag',
      creatorId: 'd7fca12a-5b34-48e6-ad64-ca6e54b1c15c',
      createdAt: '2021-01-20T23:51:29.216Z',
      updatedAt: '2021-03-12T16:45:13.637Z',
      __v: 0,
      creator: {
        subs: [
          'auth0|600759271090810069a901b1'
        ],
        _id: 'd7fca12a-5b34-48e6-ad64-ca6e54b1c15c',
        name: 'harry@harry.com',
        picture: 'https://s.gravatar.com/avatar/2ce86b4a282026efe06819589ebb253a?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fha.png',
        email: 'harry@harry.com',
        createdAt: '2021-01-20T23:06:32.049Z',
        updatedAt: '2021-01-20T23:06:32.049Z',
        __v: 0,
        id: 'd7fca12a-5b34-48e6-ad64-ca6e54b1c15c'
      },
      id: '6008c2018140b40015c4e3ea'
    }
  ],
  activeBlog: {},
  comments: []
})
