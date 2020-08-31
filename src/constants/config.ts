export const config = {
    isDev: process.env.NODE_ENV !== 'production',
    apiUrl: 'https://api-v1.womprotocol.io/',
    maxFileSize: {
        number: 1000 * 1000 * 10,
        string: '10MB'
    }
};

function isRequiredVariablesDefined() {
    const { apiUrl } = config;

    return Boolean(apiUrl);
}

if (!isRequiredVariablesDefined()) {
    console.error('Some of required environment variable is undefined!');
    // throw new Error('Some of required environment variable is undefined!');
}

export default config;
