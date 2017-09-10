export interface BlogInterface {
    userId: string;
    title: string;
    authorName: string;
    description: string;
    createdDate: Date;
    coverImage: any;
    threads: Object[];
}
