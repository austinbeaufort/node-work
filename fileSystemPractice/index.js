// FILE HANDLING PROBLEM SET FROM https://www.w3resource.com/c-programming-exercises/file-handling/index.php
// Solving the Challenges in Node.


const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// 1. Write a program to create and store information in a text file.

// fs.writeFile('createdFile.txt', 
//     'Hello World!! I created a new file and added some text to it.', 
//     () => {
//     console.log('file created..');
// });


// 2. Write a program to read an existing file.

// let documentText = fs.readFileSync('createdFile.txt', 'utf8');
// console.log(documentText);



//3. Write a program to write multiple lines in a text file.

// fs.writeFile('testFile.txt', `Test line 1
// Test line 2
// Test line 3
// Test line 4`,
//         () => {
//             console.log('test file created..');
//         })


// 4. Write a program to read the file and store the lines into an array

// let testFileData = fs.readFileSync('testFile.txt', 'utf-8');
// let linesArray = testFileData.split('\n');
// console.log(linesArray);



// 5. Write a program to Find the Number of Lines in a Text File. 

// const countLinesInFile = () => {
//     let fileData = fs.readFileSync('testFile.txt', 'utf-8').split('\n');
//     return `This file has ${fileData.length} lines`;
// }

// console.log(countLinesInFile());



// 6. Write a program to find the content of the file and number of lines in a Text File.

// const findContentAndNumLinesOfFile = () => {
//     let fileData = fs.readFileSync('testFile.txt', 'utf-8');
//     let linesInFile = fileData.split('\n').length;
//     return `The file has this file data written to it: 
// ${fileData}

// **********************************************
// The file has ${linesInFile} lines
// **********************************************`;
// }

// console.log(findContentAndNumLinesOfFile());



// 7. Write a program to count a number of words and characters in a file.

// const findNumOfWordsAndCharactersInFile = () => {
//     let fileData = fs.readFileSync('testFile.txt', 'utf-8');
//     let wordsInFile = fileData.split(/\s/).length;
//     let charactersInFile = fileData.split(/\S/).length - 1;
//     return `The number of words in the file test.txt are: ${wordsInFile}
// The number of characters in the file test.txt are: ${charactersInFile}`;
// }

// console.log(findNumOfWordsAndCharactersInFile());



// 8. Write a program to delete a specific line from a file.

// const deleteSpecificLineFromFile = number => {
//     let fileData = fs.readFileSync('testFile.txt', 'utf-8').split('\n');
//     fileData.splice((number - 1), 1);
//     let newFileToWrite = fileData.join('\n');
//     fs.writeFileSync('testFile.txt', newFileToWrite);
// }

// console.log(deleteSpecificLineFromFile(1));


// 9. Write a program to replace a specific line with another text in a file.

// const replaceSpecificTextInFile = (oldText, replacementText) => {
//     let fileData = fs.readFileSync('testFile.txt', 'utf-8');
//     let newTextFile = fileData.replace(oldText, replacementText);
//     fs.writeFileSync('testFile.txt', newTextFile);
// }

// replaceSpecificTextInFile('Test line 2', 'Frozen 2');



// 10. Write a program to append multiple lines at the end of a text file.

// const appendMultipleLinesToEndOfFile = (fileName, textToAppend) => {
//     let fileData = fs.readFileSync(fileName, 'utf-8');
//     fileData += `
// ${textToAppend}`;

//     fs.writeFileSync(fileName, fileData);
// }

// appendMultipleLinesToEndOfFile('testFile.txt', 
// `Test line 5
// Test line 6
// Test line 7`);



// 11. Write a program to copy a file in another name.

// const copyFileToNewFile = (sourceFile, newFile) => {
//     let fileData = fs.readFileSync(sourceFile, 'utf-8');
//     fs.writeFileSync(newFile, fileData);
//     console.log(`file copied..`);
// }

// copyFileToNewFile('testFile.txt', 'testFile1.txt');



// 12. Write a program to merge two files and write it in a new file.

// const mergeFiles = (sourceFile1, sourceFile2, newFileName) => {
//     let firstFileData = fs.readFileSync(sourceFile1, 'utf-8');
//     let secondFileData = fs.readFileSync(sourceFile2, 'utf-8');
//     let newFileData = firstFileData + '\n\n' + secondFileData;
//     fs.writeFileSync(newFileName, newFileData);
//     console.log('Files Merged..');
// }

// mergeFiles('testFile.txt', 'testFile1.txt', 'mergedFile.txt');



// 13. Write a program to zip a text file.

// const readStream = fs.createReadStream('testFile.txt');
// const gzipStream = zlib.createGzip();
// const writeStream = fs.createWriteStream('encryptedFile.txt');

// readStream
//     .pipe(gzipStream)
//     .pipe(writeStream)


// 14. Write a program to unzip the text file.

// const readStream = fs.createReadStream('encryptedFile.txt');
// const gUnzipStream = zlib.createGunzip();
// const writeStream = fs.createWriteStream('unEncryptedFile.txt');

// readStream
//     .pipe(gUnzipStream)
//     .pipe(writeStream)



// 15. Write a program to remove a file from the disk.
// const deleteFile = fileToDelete => {
//     fs.unlinkSync(fileToDelete);
//     console.log(`File Deleted..`);
// }

// deleteFile('testFile1.txt');