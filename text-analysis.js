// text-analysis.js
document.addEventListener('DOMContentLoaded', function() {
    const analyzeBtn = document.getElementById('analyze-btn');
    const textInput = document.getElementById('text-input');
    const results = document.getElementById('results');
    
    analyzeBtn.addEventListener('click', function() {
        const text = textInput.value.trim();
        
        if (text.length === 0) {
            alert('Please enter some text to analyze');
            return;
        }
        
        // Basic statistics
        const letters = text.replace(/[^a-zA-Z]/g, '').length;
        const words = text.split(/\s+/).filter(word => word.length > 0).length;
        const spaces = text.split(' ').length - 1;
        const newlines = text.split('\n').length - 1;
        const specialSymbols = text.replace(/[a-zA-Z0-9\s]/g, '').length;
        
        document.getElementById('basic-stats').innerHTML = `
            <p>Letters: ${letters}</p>
            <p>Words: ${words}</p>
            <p>Spaces: ${spaces}</p>
            <p>Newlines: ${newlines}</p>
            <p>Special Symbols: ${specialSymbols}</p>
        `;
        
        // Pronouns count
        const pronouns = ['i', 'me', 'my', 'mine', 'myself', 
                        'you', 'your', 'yours', 'yourself', 
                        'he', 'him', 'his', 'himself',
                        'she', 'her', 'hers', 'herself',
                        'it', 'its', 'itself',
                        'we', 'us', 'our', 'ours', 'ourselves',
                        'they', 'them', 'their', 'theirs', 'themselves'];
        
        const pronounCounts = {};
        pronouns.forEach(pronoun => {
            const regex = new RegExp(`\\b${pronoun}\\b`, 'gi');
            const matches = text.match(regex);
            pronounCounts[pronoun] = matches ? matches.length : 0;
        });
        
        let pronounsHTML = '';
        for (const [pronoun, count] of Object.entries(pronounCounts)) {
            if (count > 0) {
                pronounsHTML += `<p>${pronoun}: ${count}</p>`;
            }
        }
        document.getElementById('pronouns').innerHTML = pronounsHTML;
        
        // Prepositions count
        const prepositions = ['about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 
                            'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between', 'beyond', 
                            'by', 'down', 'during', 'for', 'from', 'in', 'inside', 'into', 'near', 'of', 
                            'off', 'on', 'out', 'over', 'through', 'to', 'toward', 'under', 'until', 'up', 
                            'upon', 'with', 'within', 'without'];
        
        const prepCounts = {};
        prepositions.forEach(prep => {
            const regex = new RegExp(`\\b${prep}\\b`, 'gi');
            const matches = text.match(regex);
            prepCounts[prep] = matches ? matches.length : 0;
        });
        
        let prepsHTML = '';
        for (const [prep, count] of Object.entries(prepCounts)) {
            if (count > 0) {
                prepsHTML += `<p>${prep}: ${count}</p>`;
            }
        }
        document.getElementById('prepositions').innerHTML = prepsHTML;
        
        // Articles count
        const articles = ['a', 'an', 'the'];
        const articleCounts = {};
        articles.forEach(article => {
            const regex = new RegExp(`\\b${article}\\b`, 'gi');
            const matches = text.match(regex);
            articleCounts[article] = matches ? matches.length : 0;
        });
        
        let articlesHTML = '';
        for (const [article, count] of Object.entries(articleCounts)) {
            articlesHTML += `<p>${article}: ${count}</p>`;
        }
        document.getElementById('articles').innerHTML = articlesHTML;
        
        results.style.display = 'block';
    });
});