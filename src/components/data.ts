export interface IPost {
  id: number;
  title: string;
  upVote: number;
  downVote: number;
  content: string;
  createdDate: string;
  category: string[];
}

export const DATA_POSTS: IPost[] = [
  {
    id: 1,
    title: "Call Api",
    upVote: 10,
    downVote: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    category: ["react", "api"],
  },
  {
    id: 2,
    title: "Call Api",
    upVote: 10,
    downVote: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    category: ["react", "api"],
  },
  {
    id: 3,
    title: "Call Api",
    upVote: 10,
    downVote: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    category: ["react", "api"],
  },
];
