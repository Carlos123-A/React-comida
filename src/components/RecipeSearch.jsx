import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
    const [keyword, setKeyword] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/search`, {
                params: { keyword }
            });
            setRecipes(response.data);
            setError('');
        } catch (err) {
            setError('Error fetching recipes');
            setRecipes([]);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.searchContainer}>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Buscar receta por ingrediente"
                    style={styles.input}
                />
                <button onClick={handleSearch} style={styles.button}>Search</button>
            </div>

            {error && <p style={styles.error}>{error}</p>}
            
            <div style={styles.recipeContainer}>
                {recipes.map((recipe, index) => (
                    <div key={index} style={styles.recipeCard}>
                        <img src={recipe.imageUrl} alt={recipe.name} style={styles.image} />
                        <div style={styles.cardContent}>
                            <h2 style={styles.title}>{recipe.name}</h2>
                            <p style={styles.description}>{recipe.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    searchContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px'
    },
    input: {
        padding: '12px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginRight: '10px',
        width: '300px'
    },
    button: {
        padding: '12px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    },
    buttonHover: {
        backgroundColor: '#0056b3'
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginBottom: '20px'
    },
    recipeContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
    },
    recipeCard: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        transition: 'box-shadow 0.3s',
        cursor: 'pointer'
    },
    recipeCardHover: {
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    },
    cardContent: {
        padding: '15px'
    },
    title: {
        margin: '0 0 10px 0',
        fontSize: '20px',
        fontWeight: 'bold',
        color:'black'
    },
    description: {
        margin: '0 0 10px 0',
        fontSize: '14px',
        color: '#555'
    },
    score: {
        margin: '0',
        fontSize: '14px',
        color: '#333'
    }
};

export default RecipeSearch;
