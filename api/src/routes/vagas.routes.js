const { Router } = require('express');
const router = Router();

const vagasMock = [
    {id: 1, título: 'Dev FrontEnd React', empresa: 'TechSimulada', tipo: 'remoto'},
    {id: 2, título: 'Dev Python', empresa: 'TechLead', tipo: 'presencial'},
    {id: 3, título: 'Dev Java', empresa: 'Sankhya', tipo: 'hibrido'}
];

router.get('/', (req, res) => {
    res.json(vagasMock);
});

module.exports = router;