import PropTypes from 'prop-types';

const ErrorFetchingData = ({ message, onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
        <p className="text-sm font-medium">{message}</p>
        {onRetry && (
            <button
            onClick={onRetry}
            className="mt-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
            Retry
            </button>
        )}
    </div>
    );
};

export default ErrorFetchingData;

ErrorFetchingData.propTypes = {
    message: PropTypes.string,
    onRetry: PropTypes.func
};