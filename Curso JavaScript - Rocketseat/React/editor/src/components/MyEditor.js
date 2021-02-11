import React from 'react';
import { EditorState, RichUtils} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import addLinkPlugin from "./plugins/addLinkPlugin.js";
import 'draft-js/dist/Draft.css';
import Buttons from './buttons.js';
import './editor.css';


const styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through',
  },
};


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.plugins = [addLinkPlugin];
    this.onChange = editorState => this.setState({editorState});
  }


  _onLink() {
    const editorState = this.state.editorState;
    const selection = editorState.getSelection();
    const link = window.prompt("Paste the link -");
    
    if (!link) {
      this.onChange(RichUtils.toggleLink(editorState, selection, null));
      return "handled";
    }
    
    const content = editorState.getCurrentContent();
    const contentWithEntity = content.createEntity("LINK", "MUTABLE", {
      url: link
    });
    
    const newEditorState = EditorState.push(
      editorState,
      contentWithEntity,
      "create-entity"
    );
    
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    this.onChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
    
    return "handled";
  }

  _editInlineStyle(nome) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, nome));
  }

  _editBlockType(nome) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, nome));
  }


  render() {
    return (
      <div id="space-editor">
        <div id="buttons">
          <Buttons 
            negrito={() => this._editInlineStyle('BOLD')} 
            italic={() => this._editInlineStyle('ITALIC')} 
            underline={() => this._editInlineStyle('UNDERLINE')} 
            strikeThrough={() => this._editInlineStyle('STRIKETHROUGH')} 
            hyperLink={() => this._onLink()}
            headerOne={() => this._editBlockType('header-one')}
            headerTwo={() => this._editBlockType('header-two')}
            headerThree={() => this._editBlockType('header-three')}
            blockquote={() => this._editBlockType('blockquote')}
            codeBlock={() => this._editBlockType('code-block')}
            unorderedList={() => this._editBlockType('unordered-list-item')}
            orderedList={() => this._editBlockType('ordered-list-item')} 
          />
        </div>
        <div id="editor">
          <Editor 
            customStyleMap={styleMap}  
            editorState={this.state.editorState} 
            onChange={this.onChange}
            plugins={this.plugins}
          />
        </div>
      </div>
    );
  }
}


export default MyEditor;
