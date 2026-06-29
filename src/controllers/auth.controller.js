import authService from "../services/auth.service.js";
import jwt from "../utils/jwt.js"; // ✅ Fix 3: was "../utils/jst.js" (typo)

const login = async (req, res) => {
    const input = req.body;

    try {
        if (!input) {
            throw {
                message: "invalid input", // ✅ Fix 4: was "massage" everywhere
            };
        }
        if (!input.email && !input.phone) {
            throw {
                message: "Email or Phone is required", // ✅ Fix 4
            };
        }
        if (!input.password) {
            throw {
                message: "Password is required", // ✅ Fix 4
            };
        }

        const user = await authService.login(req.body);
        const token = jwt.createToken(user);

        // Set cookie (httpOnly) and return user + token
        res.cookie("authToken", token, {
            maxAge: 86400 * 1000,
            httpOnly: true,
            sameSite: "lax",
        });

        res.json({ ...user, token });
    } catch (error) {
        res.status(error.status || 400).json({ message: error.message });
    }
};

const register = async (req, res) => {
    const input = req.body;

    try {
        if (!input) {
            throw {
                message: "invalid input", // ✅ Fix 4
            };
        }
        if (!input.email) {
            throw {
                message: "Email is required", // ✅ Fix 4
            };
        }
        if (!input.name) {
            throw {
                message: "Name is required", // ✅ Fix 4
            };
        }
        if (!input.phone) {
            throw {
                message: "PhoneNumber is required", // ✅ Fix 4
            };
        }
        if (!input.password) {
            throw {
                message: "Password is required", // ✅ Fix 4
            };
        }

            const user = await authService.register(input);
            const token = jwt.createToken(user);

            res.cookie("authToken", token, {
                maxAge: 86400 * 1000,
                httpOnly: true,
                sameSite: "lax",
            });

            res.json({ ...user, token });
    } catch (error) {
        res.status(error.status || 400).json({ message: error.message });
    }
};

export default { login, register };