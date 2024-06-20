import axios from "axios";


// Define the API methods interface
interface ApiMethods<T> {
    method: string;
    url: string;
    postObj?: T | {};
    header?: {}
}

// Define the response type
interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    error: string | null;
}

// Common function to make API requests based on the ApiMethods interface
export const ApiRequestMethod = async <T>(
    { method, url, postObj, header }: ApiMethods<T>
): Promise<ApiResponse<T>> => {
    try {
        let response: any

        switch (method.toUpperCase()) {
            case 'GET':
                response = await axios.get(url);
                break;
            case 'POST':
                response = await axios.post(url, postObj, header);
                break;
            case 'PUT':
                response = await axios.put(url, postObj, header);
                break;
            case 'DELETE':
                response = await axios.delete(url);
                break;
            default:
                throw new Error('Unsupported HTTP method');
        }

        return {
            success: true,
            data: response,
            error: null,
        };
    } catch (error: any) {
        return {
            success: false,
            data: null,
            error: error.response?.data?.message || 'Unknown error',
        };
    }
};
