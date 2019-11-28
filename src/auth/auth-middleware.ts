import { NextFunction, Response } from 'express';
import { FirebaseAuth } from './firebase';
import { UnauthorizedException } from './exceptions/unauthorized-exception';

const firebase = new FirebaseAuth()

function authMiddleware(route: any) {
    return function (request: any, response: Response, next: NextFunction) {
        if (route.auth == true) {
            try {
                const user = firebase.currentUser()
                if (user) {
                    request.user = user;
                    next();
                } else {
                    next(new UnauthorizedException());
                }
            } catch (error) {
                next(new UnauthorizedException());
            }
        } else {
            next()
        }
    }

}
export default authMiddleware;