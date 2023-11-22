const yaml = require('js-yaml');

const yamlString1 = `
name: John Doe
age: 30
email: johndoe@example.com
`;

try {
  const data = yaml.load(yamlString1);
  console.log(data);
} catch (error) {
  console.error(error);
}


const yaml = require('js-yaml');

const data = {
  name: 'Alice Smith',
  age: 25,
  email: 'alice@example.com',
};

const yamlString = yaml.dump(data);
console.log(yamlString);


const fs = require('fs');
const yaml = require('js-yaml');

// Read YAML from a file
try {
  const fileContents = fs.readFileSync('data.yaml', 'utf8');
  const data = yaml.load(fileContents);
  console.log(data);
} catch (error) {
  console.error(error);
}

// Write YAML to a file
const dataToWrite = {
  name: 'Bob Johnson',
  age: 35,
  email: 'bob@example.com',
};

const yamlStringToWrite = yaml.dump(dataToWrite);

try {
  fs.writeFileSync('output.yaml', yamlStringToWrite, 'utf8');
  console.log('YAML data written to output.yaml');
} catch (error) {
  console.error(error);
}
