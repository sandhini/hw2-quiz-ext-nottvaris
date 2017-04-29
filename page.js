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

//get the body element of the page
// let body = document.querySelector('body');
// let space = ' ';
let space = /\s+/;
let newline = /\n+/;
// let newline = '\n';
let arrayOfStrings = null;

function splitString(stringToSplit, separator) {
  arrayOfStrings = stringToSplit.split(separator);
} 


function transformTextNodes(node) {


      //get all the text nodes
      if (node.nodeType === Node.TEXT_NODE && node.nodeName !== '<script>' && node.nodeName !== '<style>') {
        // console.log(bodyNodes);
        // console.log(bodyNodes.textContent);
        // console.log(bodyNodes.childNodes);

        let text = node.textContent;
        console.log(text);
        text.trim();



        //put textContent of textNode into arrays of strings
        splitString(text, space, newline);
        console.log(arrayOfStrings);

        for (let i = 0; i < arrayOfStrings.length; i++) {

          if (MATCH_LIST[arrayOfStrings[i]]){
            arrayOfStrings[i] = MATCH_LIST[arrayOfStrings[i]];
            //concert a sting array back to string
            //textContent that
            let newText = arrayOfStrings.join(" ");
            newText.trim();
            node.textContent = newText;
            // console.log(arrayOfStrings[i]);
            // console.log(arrayOfStrings);
          }
          
        








        }

      } else {

        //get all childnodes within the document.body except for text content of <script> and <style>
         for (const child of node.childNodes){
          transformTextNodes(child);
      }

}

  



        //while getting that check if any of them == to the 3 cases we got (1. there, 2. their, 3. they're)
        //if equal to one of these modify it accordingly

  }



 

  //display the results

transformTextNodes(document.body);


// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
