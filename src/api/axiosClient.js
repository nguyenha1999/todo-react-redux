import React from 'react'
import axios from 'axios'

const token = '';

const axiosClient = axios.create(
    {
        baseURL: 'https://60bd906bace4d50017aab33c.mockapi.io/api',
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    }
)

export default axiosClient



