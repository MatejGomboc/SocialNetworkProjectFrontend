namespace AuthService {
    interface Tokens {
        accessToken: string,
        refreshToken: string
    }

    function getErrorDescription(responseStatusText: string, responseBodyText: string): string {
        if (responseBodyText.length === 0) {
            return responseStatusText;
        }

        interface ResponseBody {
            type: string,
            title: string,
            status: number,
            traceId: string,
            errors?: object
        }

        const responseBodyJson: ResponseBody = JSON.parse(responseBodyText);
        let errorString: string = responseBodyJson.title + "\n";

        if (responseBodyJson.errors !== undefined) {
            for (const key in responseBodyJson.errors) {
                errorString += "* " + responseBodyJson.errors[key as keyof typeof responseBodyJson.errors] + "\n";
            }
        }

        errorString = errorString.trimEnd();
        return errorString;
    }

    export async function register(username: string, password1: string, password2: string, email: string): Promise<void> {
        const response: Response = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/api/auth/register",
            {
                method: "POST",
                mode: "cors",
                cache: "no-store",
                credentials: "omit",
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: "error",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(
                    {
                        "username": username,
                        "password": password1,
                        "confirmPassword": password2,
                        "emailAddress": email
                    }
                )
            }
        );

        if (!response.ok) {
            const responseBodyText: string = await response.text();
            const errorDescription: string = getErrorDescription(response.statusText, responseBodyText);
            throw new Error(errorDescription);
        }
    }

    export async function login(username: string, password: string): Promise<Tokens> {
        const response: Response = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/api/auth/login",
            {
                method: "PATCH",
                mode: "cors",
                cache: "no-store",
                credentials: "omit",
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: "error",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(
                    {
                        "username": username,
                        "password": password
                    }
                )
            }
        );

        if (!response.ok) {
            const responseBodyText: string = await response.text();
            const errorDescription: string = getErrorDescription(response.statusText, responseBodyText);
            throw new Error(errorDescription);
        }

        const tokens: Tokens = await response.json();
        return tokens;
    }

    export async function refresh(access_token: string, refresh_token: string): Promise<Tokens> {
        const response: Response = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/api/auth/refresh",
            {
                method: "PATCH",
                mode: "cors",
                cache: "no-store",
                credentials: "omit",
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: "error",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(
                    {
                        "accessToken": access_token,
                        "refreshToken": refresh_token
                    }
                )
            }
        );

        if (!response.ok) {
            const responseBodyText: string = await response.text();
            const errorDescription: string = getErrorDescription(response.statusText, responseBodyText);
            throw new Error(errorDescription);
        }

        const tokens: Tokens = await response.json();
        return tokens;
    }

    export async function logout(access_token: string): Promise<void> {
        const response: Response = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/api/auth/logout",
            {
                method: "PATCH",
                mode: "cors",
                cache: "no-store",
                credentials: "omit",
                headers: {
                    "Authorization": "bearer " + access_token
                },
                redirect: "error",
                referrerPolicy: "no-referrer"
            }
        );

        if (!response.ok) {
            const responseBodyText: string = await response.text();
            const errorDescription: string = getErrorDescription(response.statusText, responseBodyText);
            throw new Error(errorDescription);
        }
    }

    export async function unregister(access_token: string): Promise<void> {
        const response: Response = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/api/auth/logout",
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-store",
                credentials: "omit",
                headers: {
                    "Authorization": "bearer " + access_token
                },
                redirect: "error",
                referrerPolicy: "no-referrer"
            }
        );

        if (!response.ok) {
            const responseBodyText: string = await response.text();
            const errorDescription: string = getErrorDescription(response.statusText, responseBodyText);
            throw new Error(errorDescription);
        }
    }
}

export default AuthService;
