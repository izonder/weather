'use strict';

class WebAPI
{
    constructor() {
        this.apis = {};
    }

    connect(url = '', timeout = 10) {
        return new WebAPIConnection(url, timeout);
    }

    getConnection(code = 'default') {
        return this.apis[code];
    }
}

class WebAPIConnection
{
    constructor(url, timeout = 10) {
        this.url = url;
        this.timeout = timeout * 1000;

        this.errors = {
            E_WEBAPI_TIMEOUT        : 'E_WEBAPI_TIMEOUT',
            E_WEBAPI_PARSE_ERROR    : 'E_WEBAPI_PARSE_ERROR',
            E_WEBAPI_REQUEST_ERROR  : 'E_WEBAPI_REQUEST_ERROR',
            E_WEBAPI_REQUEST_FAILED : 'E_WEBAPI_REQUEST_FAILED'
        }
    }

    exec() {
        return new Promise(function (resolve, reject) {
            let url = this.url,
                xhr = new XMLHttpRequest();

            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.timeout = this.timeout;

            xhr.ontimeout = () => reject(new Error(this.errors.E_WEBAPI_TIMEOUT));
            xhr.onerror = () => reject(new Error(this.errors.E_WEBAPI_REQUEST_ERROR));
            xhr.onload = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        try {
                            let response = xhr.response;
                            resolve(response);
                        }
                        catch(e) {
                            reject(new Error(this.errors.E_WEBAPI_PARSE_ERROR))
                        }
                    }
                    else {
                        reject(new Error(this.errors.E_WEBAPI_REQUEST_FAILED));
                    }
                }
            };

            xhr.send();
        }.bind(this));
    }
}

export default new WebAPI;