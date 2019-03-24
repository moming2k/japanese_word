import {
    get,
} from '../lib/request';

export const findCourses = async ({ jwt }) => {
    try {
        const response = await get('/jpfiletblv2tw.json', {
        }, jwt);
        return response;
    } catch (error) {
        return error;
    }
};

export const findCourse = async ({ jwt, courseId   }) => {
    try {
        const response = await get(`/${courseId}`, {
        }, jwt);
        return response;
    } catch (error) {
        return error;
    }
};