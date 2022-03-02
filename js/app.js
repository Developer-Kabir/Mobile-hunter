const searchResults = document.getElementById('search-results');
const detailSection = document.getElementById('product-details');

const search = () => {
    let searchText = document.getElementById('search-input').value;
    searchText = searchText.toLowerCase();
    // console.log(searchText);
    if (searchText === '') {
        searchResults.textContent = '';
        detailSection.textContent = '';
        document.getElementById('search-input').value = '';
        document.getElementById('empty-inputField').style.display = 'block';
        document.getElementById('no-search-result').style.display = 'none';
        document.getElementById('results-number-section').style.display = 'none';
        document.getElementById('see-more-btn').style.display = 'none';
    }
    else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
            .then(response => response.json())
            .then(data => searchPhone(data.data))
    }
}