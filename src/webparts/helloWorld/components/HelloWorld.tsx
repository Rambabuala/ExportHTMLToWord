import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
// HTML TO DOCX
import * as fs from 'fs-web';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {

  constructor(props){
    super(props);
       this.docxToHTML = this.docxToHTML.bind(this);
    }

    docxToHTML(){
      var contentDocument = document.getElementById('content');
      var charSet = ' '
      var content = charSet + contentDocument.outerHTML;
      console.log(content);
      var converted = htmlDocx.asBlob(content);
      
        saveAs(converted, 'test.docx');
      }

  public render(): React.ReactElement<IHelloWorldProps> {
    return (
     <div>
          <div id="content">
              <div className="wrapbox">
                          <h4 className="a-right"><strong></strong></h4><br/>
                          <h4 className="a-right"><strong>Versão A</strong></h4>
              </div>
              <div className="wrapbox">
                          <h1 className="a-center">
                            Prova de Geografia 3º ano EF1
                          </h1>
              </div>
              <div className="Datos">
                          <div className="width-70"><h5><strong>Nome: _____________________________________________</strong></h5></div>
                          <div className="width-30"><h5><strong>Turma: ______________</strong></h5></div>
                          <div className="a-left"><h5><strong>Data: ____________________________</strong></h5></div>
              </div>
              <div className="dashedLine">
                          <div>
                            <p><strong>Instruções:</strong></p>
                            <p></p><p><span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque porta velit vitae mattis. Curabitur vel lorem sed diam condimentum congue. Nulla et sapien enim.</span></span></p><p></p>
                          </div>
              </div>
            </div>
            <div className="mt-5">
              <button className="btn btn-primary" onClick={this.docxToHTML}>Download Docx</button>
            </div>
      </div>
    );
  }
}
