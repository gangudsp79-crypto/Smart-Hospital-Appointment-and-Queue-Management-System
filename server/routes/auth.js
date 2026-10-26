const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");

const router = express.Router();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/google", async (req, res) => {
    try {
        const { credential } = req.body;

        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();

        const { sub, name, email, picture } = payload;

        let user = await User.findOne({ googleId: sub });

        if (!user) {
            user = await User.create({
                googleId: sub,
                name,
                email,
                profilePicture: picture
            });
        }

        res.json({
            message: "Google login successful",
            user
        });

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Google authentication failed"
        });
    }
});

module.exports = router;