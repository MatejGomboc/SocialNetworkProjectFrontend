export namespace AuthService {
    export async function register(username: string, password1: string, password2: string, email: string): Promise<boolean> {
        try {
            const response = await fetch(
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
                            "emailAddress": email,
                        }
                    )
                }
            );

            if (response.status !== 201) {
                return false;
            }

            return true;

        } catch {
            return false;
        }
    }

    export async function login(username: string, password: string): Promise<string> {
        try {
            const response = await fetch(
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

            if (response.status !== 200) {
                return "";
            }

            const tokens = await response.json();
            return tokens;

        } catch {
            return "";
        }
    }

    export async function refresh(access_token: string, refresh_token: string): Promise<string> {
        try {
            const response = await fetch(
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

            if (response.status !== 200) {
                return "";
            }

            const tokens = await response.json();
            return tokens;

        } catch {
            return "";
        }
    }

    export async function logout(access_token: string): Promise<boolean> {
        try {
            const response = await fetch(
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

            if (response.status !== 200) {
                return false;
            }

            return true;

        } catch {
            return false;
        }
    }

    export async function unregister(access_token: string): Promise<boolean> {
        try {
            const response = await fetch(
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

            if (response.status !== 200) {
                return false;
            }

            return true;

        } catch {
            return false;
        }
    }
}
