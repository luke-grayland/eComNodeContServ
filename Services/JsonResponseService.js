const JsonResponse = (
    data = [],
    success = false,
    message = 'Error',
    status = 200
) => {
    return {
        "success": success,
        "message": message,
        "status": status,
        "data": data
    }
}

module.exports = JsonResponse