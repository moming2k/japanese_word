import axios from 'axios';
// import getConfig from 'next/config';

// const { publicRuntimeConfig } = {};// getConfig();

/**
 * TODO rename API_AUTH_URL to API_PARIS_URL later after beanstalk configuration is done.
 */
const API_HOST = 'http://localhost:3000';
const getUrl = endpoint => API_HOST + endpoint;

console.log(`API_HOST: ${API_HOST}`);

export const post = async (endpoint, data) => axios.post(getUrl(endpoint), data, {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export const get = async (endpoint, data) => axios.get(getUrl(endpoint), data, {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export const postWithJwt = async (endpoint, data, jwt) => {
    data.token = jwt;
    return axios.post(getUrl(endpoint), data, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${jwt}`,
        },
    });
};

export const getWithJwt = async (endpoint, params, jwt) => axios.get(getUrl(endpoint),
{
    params,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${jwt}`,
    },
});
