function openMultipleWebsites() {
    const searchQuery = document.getElementById('search-input').value;
  
    if (!searchQuery) {
      alert('Please enter a product name');
      return;
    }
  
    // Constructing URLs for different e-commerce platforms
    const amazonURL = `https://www.amazon.in/s?k=${encodeURIComponent(searchQuery)}`;


    const flipkartURL = `https://www.flipkart.com/search?q=${encodeURIComponent(searchQuery)}`;
   const myntraURL=`https://www.myntra.com/shirts?rawQuery=${encodeURIComponent(searchQuery)}`;
   const chroma=`https://www.croma.com/searchB?q=${encodeURIComponent(searchQuery)}`;
    // Open new tabs for each platform
    window.open(amazonURL);
    window.open(flipkartURL);
   window.open(myntraURL);
   window.open(chroma);
  }
  