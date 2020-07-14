export interface Review{
    id: number;
    reviewer: number;
    reviewer_name?: string;
    reviewee: number;
    reviewee_name?: string;
    comments: string;
    created: Date;
    updated: Date;
}
