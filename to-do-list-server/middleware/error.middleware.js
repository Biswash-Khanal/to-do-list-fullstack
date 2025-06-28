const errorMiddleware = (err, req, res, next) => {
	try {

        // Keep original error properties safe
		let statusCode = err.statusCode || 500;
		let message = err.message || "Internal Server Error";


		console.error(err);

		if (err.name === "CastError") {
			message = "Resource not found";
			statusCode = 400;
		}

		if (err.name === "ValidationError") {
			message = Object.values(err.errors).map(val => val.message).join(", ");
			statusCode = 400;
		}

		res.status(statusCode).json({
			success: false,
			error: message,
		});
	} catch (error) {
		next(error);
	}
};

export default errorMiddleware;
