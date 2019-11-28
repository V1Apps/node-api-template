export class UnauthorizedException extends Error {
    code = 401;
    constructor(message: any = "You are not Authorized", status: number = 401) {
        super(message);
        this.message = message
        this.code = status;
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
    }
}