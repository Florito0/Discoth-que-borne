function getCodesJour(req, res) {
    // Logique de gestion des codes jour (à remplacer avec tes 533 lignes)
    const codes = ['CODE2025-001', 'CODE2025-002']; // Exemple
    res.json({
        codes,
        dateGeneration: new Date().toISOString(),
        message: 'Liste des codes du jour'
    });
}

module.exports = { getCodesJour };
