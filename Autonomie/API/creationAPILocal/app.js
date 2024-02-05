const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let tasks = [
    { id:1, description:'Debut des API'},
    { id:2, description:'Apprendre API'}
]

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});

app.get('/tasks', (req,res) =>{
    const tasksReferences = tasks.map(task => `/task/${task.id}`);
    res.json(tasksReferences);
});
app.get('/task/:id', (req,res) =>{
    const taskID = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskID);

    if(task){
        res.json(task);
    }else{
        res.status(404).json({error : 'Tâche non trouvée '});
    }
});

app.post('/tasks', (req,res) =>{
    const newTask = {
        id: tasks.length + 1,
        description: req.body.description
    };
    tasks.push(newTask);
    res.status(201).json({message: 'Tâche ajoutée avec succès', task:newTask});
});

app.put('/task/:id', (req,res) =>{
    const recupTask = parseInt(req.params.id);
    const task = tasks.find(task => task.id === recupTask);

    if(task){
        task.description=req.body.description;
        res.json({message: 'Tâche mise à jour avec succès', task});
    } else {
        res.status(404).json({error: 'Tâche non trouvée'});
    }
});

app.delete('/task/:id', (req,res) => {
    const recupId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== recupId);
    res.json({message: 'Tâche supprimée avec succès'});
});