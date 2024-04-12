

function titleCased() {
  return tutorials.map(title => {
    // Split the title into words
    const words = title.split(' ');
    
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Join the capitalized words back into a title
    return capitalizedWords.join(' ');
  });
}

// Test the function
console.log(titleCased());
