let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); // removes last string
secretMessage.push('to', 'Program'); // appends to and program to the end of the array
secretMessage[7] = 'right'; // accessing index 7 to change the element to the string right
secretMessage.unshift('Programming'); // adds element to beginning aray
secretMessage.splice(7, 4, 'know');
 //selects the index that you'd like to start removing elements from and the amount you want gone starting from the index. also adds any elements you want to replace from that index too.

console.log(secretMessage.join());
