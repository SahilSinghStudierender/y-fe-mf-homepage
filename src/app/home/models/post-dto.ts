export interface PostDto {
    id: number;
    userName: string;
    subCategory: string;
    topic: string;
    heading: string;
    body: string;
    timestamp: Date;
    commentCount: number;
}

export const defaultPost: PostDto = {
    id: 0,
    userName: "",
    subCategory: "",
    topic: "",
    heading: "",
    body: "",
    timestamp: new Date(),
    commentCount: 0
};