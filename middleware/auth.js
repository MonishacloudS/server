import { request } from "express";
import jwt from "jsonwebtoken";

const auth = async (request, response, next) => {
    try {
        const token = request.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');

            request.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            request.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;