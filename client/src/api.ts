import axios from 'axios';
import {APIRootPath} from '@fed-exam/config';




export type Ticket = {
    id: string,
    title: string;
    content: string;
    creationTime: number;
    userEmail: string;
    labels?: string[];
}

export type ApiClient = {
    getTickets: (s:string, p:number) => Promise<Ticket[]>;
}

/** get tickets with search and page queries */
export const createApiClient = (): ApiClient => {
    return {
        getTickets: async (s:string, p:number) => {
            const res = await axios.get(APIRootPath, { params: { search: s , page : p} });
            return res.data;
        }
    }
}


