// Streams 

// Readable Stream (Reading a File):

const fs = require('fs');

const readableStream = fs.createReadStream('example.txt', 'utf8');

readableStream.on('data', chunk => {
  console.log('Chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('Reading finished.');
});

readableStream.on('error', err => {
  console.error('Error:', err);
});


// Writable Stream (Writing to a File):

const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt', 'utf8');

writableStream.write('Hello, ');
writableStream.write('World!');
writableStream.end();

writableStream.on('finish', () => {
  console.log('Writing finished.');
});

writableStream.on('error', err => {
  console.error('Error:', err);
});


// Piping Streams (Copying a File):

const fs = require('fs');

const readableStream1 = fs.createReadStream('input.txt');
const writableStream1 = fs.createWriteStream('output.txt');

readableStream1.pipe(writableStream1);

writableStream1.on('finish', () => {
  console.log('File copied successfully.');
});

writableStream1.on('error', err => {
  console.error('Error:', err);
});


// Transform Stream (Converting Text to Uppercase):

const fs = require('fs');
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const readableStream2 = fs.createReadStream('example.txt', 'utf8');
const writableStream2 = fs.createWriteStream('output.txt', 'utf8');

readableStream2.pipe(upperCaseTransform).pipe(writableStream2);

writableStream2.on('finish', () => {
  console.log('Conversion to uppercase finished.');
});

writableStream2.on('error', err => {
  console.error('Error:', err);
});



