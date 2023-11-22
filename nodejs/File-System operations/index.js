// Reading a File

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('File content:', data);
  }
});


// Writing a file

const fs = require('fs');

const content = 'This is some content to be written to the file.';

fs.writeFile('example.txt', content, 'utf8', err => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('File has been written successfully.');
  }
});

// Appending a File

const fs = require('fs');

const additionalContent = '\nThis is additional content to be appended.';

fs.appendFile('example.txt', additionalContent, 'utf8', err => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Content has been appended to the file successfully.');
  }
});


// Checking if a file or directory exists

const fs = require('fs');

fs.access('example.txt', fs.constants.F_OK, err => {
  if (err) {
    console.error('File does not exist.');
  } else {
    console.log('File exists.');
  }
});


// Creating a directory

const fs = require('fs');

fs.mkdir('new_directory', err => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Directory created successfully.');
  }
});


// Deleting a file

const fs = require('fs');

fs.unlink('example.txt', err => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('File has been deleted successfully.');
  }
});
