export interface IPostDummy {
  id: number;
  title: string;
  upVotes: number;
  downVotes: number;
  content: string;
  createdDate: string;
  categories: string[];
  author: string;
  stacks: string[];
}

export const DATA_POSTS: IPostDummy[] = [
  {
    id: 1,
    title: "Call Api",
    upVotes: 10,
    downVotes: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    categories: ["react", "angular", "nest", "express"],
    author: "John Doe",
    stacks: ["react", "angular", "nest", "express"],
  },
  {
    id: 2,
    title: "Call Api",
    upVotes: 10,
    downVotes: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    categories: ["dotnet", "mongodb", "mysql", "postgresql"],
    author: "John Doe",
    stacks: ["dotnet", "mongodb", "mysql", "postgresql"],
  },
  {
    id: 3,
    title: "Call Api",
    upVotes: 10,
    downVotes: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    categories: ["vue", "astro", "svelte"],
    author: "John Doe",
    stacks: ["vue", "astro", "svelte"],
  },
  {
    id: 4,
    title: "Call Api",
    upVotes: 10,
    downVotes: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    categories: ["vue", "astro", "svelte"],
    author: "John Doe",
    stacks: ["vue", "astro", "svelte"],
  },
];
