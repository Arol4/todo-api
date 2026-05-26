const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Token manquant" });

    // Extrait le token après le mot-clé 'Bearer'
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id; // Injecte l'ID utilisateur dans la requête pour les contrôleurs
        next();
    } catch {
        res.status(401).json({ message: "Token invalide" });
    }
};