export default class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }

    static NotFound(message, errors = []) {
        return new ApiError(404, message, errors);
    }

    static NotAllowed(message, errors = []) {
        return new ApiError(403, message, errors);
    }

    static NoContent(message, errors = []) {
        return new ApiError(204, message, errors);
    }

    static DBProblem(message, errors = []) {
        return new ApiError(500, message, errors);
    }

    static GitProblem(message, errors = []) {
        return new ApiError(500, message, errors);
    }
}
