const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

let space = /\s+/; // separator 1 for a split function , spaces.
let newline = /\n+/; //separator 2 for a split function , newlines.
let arrayOfStrings = null;

function splitString(stringToSplit, separator) { //put a string into an array so that we can loop over and check for matches
  arrayOfStrings = stringToSplit.split(separator); //use 2 separators to parse out the string (1. spaces 2. newlines)
} 


function transformTextNodes(node) { // walk the DOM tree until all text node is found

      if (node.nodeType === Node.TEXT_NODE && node.nodeName !== '<script>' && node.nodeName !== '<style>') { //check if a node is a text node or not

        let text = node.textContent; //get the text content of that text node and store it
        text.trim(); //trim any whitespaces

        splitString(text, space, newline); //put textContent of the textNode into arrays of strings
    

        for (let i = 0; i < arrayOfStrings.length; i++) {

          if (MATCH_LIST[arrayOfStrings[i]]){  //if a string in an array matches one of the keys then..
            arrayOfStrings[i] = MATCH_LIST[arrayOfStrings[i]];  //then replace it witht he key value
         
            let newText = arrayOfStrings.join(" "); //convert the array back to a string
            newText.trim(); //trim any whitespaces
            node.textContent = newText; //replace the current text content with the new text content
          }
          

        }

      } else { // if a text node is not found then go into its childnode element to exmaine further (start of the recursion

         for (const child of node.childNodes){ ////go into childnodes of the node element until text node is found (recursion()
          transformTextNodes(child);
      }

}


  }

transformTextNodes(document.body); //pass in the body of the HTML to be walked through its DOM


// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');