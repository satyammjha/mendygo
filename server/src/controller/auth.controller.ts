import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model";

export async function login(req: any, res: any): Promise<void> {
    try {
        const { username, password } = req.body;
        console.log("Username and pas:", username, "...", password)
        if (!username || !password) {
            res.status(400).json({ error: "Username and password are required" });
            return;
        }

        const user = await User.findOne({ username });
        if (!user) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        const isMatch = (password == user.password);
        console.log("🔍 Comparing:", password, "with hash:", user.password);
        console.log("✅ Password match result:", isMatch);
        if (!isMatch) {
            res.status(401).json({ error: "Invalid [password]" });
            return;
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        );

        res.status(200).json({ token, message: "Login successful" });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}