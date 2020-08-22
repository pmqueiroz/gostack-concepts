import React, { useState, useEffect } from 'react';
import api from './services/api'

import Header from './components/Header'
import './App.css';

function App() {
    const [projects, setProject] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            ownder: "Predo Queiroz"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Homepage"/>
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)} 
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;