export class Quotes {
    constructor(
        public id:number,
        public author: string,
        public quote: string,
        public upvote: number,
        public downvote: number,
        public submitedBy: string,
        public submissionDate: Date,
         ){}
}
