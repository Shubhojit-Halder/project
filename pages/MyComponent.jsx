// import React from 'react'
// import ContentEditable from 'react-contenteditable'

// class MyComponent extends React.Component {
//   constructor() {
//     super()
//     this.contentEditable = React.createRef();
//     this.state = {html: "Pour your thoughts."};
//   };

//   handleChange = (evt) => {
//     this.setState({html: evt.target.value});
//     console.log({html: evt.target.value});
//   };

//   render = () => {
//     return <ContentEditable
//               variant="contained"
//               innerRef={this.contentEditable}
//               html={this.state.html} // innerHTML of the editable div
//               disabled={false}       // use true to disable editing
//               onChange={this.handleChange} // handle innerHTML change
//               // tagName='article' // Use a custom HTML tag (uses a div by default)
//             />
//   };
// };
// export default MyComponent;
import React,{useEffect} from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MyComponent=()=>{
   return (
    
      <Editor
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         wrapperStyle={{ width: 800, border: "1px solid black" }}
      />
   );
}
export default MyComponent