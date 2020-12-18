const PROXY_CONFIG = {
    '/v1': {
        target: 'https://8xfd8uu1ph.execute-api.us-east-2.amazonaws.com/',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        onProxyReq: (proxyReq, req, res) => {
            const cookieMap = {
                SID: '',
            };
            let cookie = '';
            for (const key in cookieMap) {
                if (Object.prototype.hasOwnProperty.call(cookieMap, key)) {
                    cookie += `${key}=${cookieMap[key]}; `;
                }
            }
            proxyReq.setHeader('cookie', cookie);
        },
    },
};

module.exports = PROXY_CONFIG;