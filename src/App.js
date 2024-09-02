import React from 'react';
import './App.css';
import RecipeSearch from './components/RecipeSearch';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Recetas</h1>
                <RecipeSearch />
            </header>
        </div>
    );
}

export default App;
