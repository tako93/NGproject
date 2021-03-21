

export interface IUsers {
    // [x: string]: any;
    page: number;
    per_page: number;
    total_pages: number;
    data: IUsersData[]
}

export interface IUsersData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}