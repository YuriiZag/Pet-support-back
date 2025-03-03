const errorMiddleware = (error, req, res, next) => {
    if (!error.message) {
        error.message = 'http error';
    }
    res.status(500).json({ message: error.message });
};
export default errorMiddleware;
