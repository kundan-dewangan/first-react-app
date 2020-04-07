import React, { Component } from "react";
import axios from 'axios';

class FileUpload extends Component{

    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
    // console.log(this.state.selectedFile);
       const fd = new FormData();
       fd.append('image',this.state.selectedFile, this.state.selectedFile.name);
       let aa = [];
       aa.push(this.state.selectedFile);
       localStorage.setItem('file-upload',JSON.stringify(aa));
       console.log(this.state.selectedFile);

        //when http call
    //    axios.post('gs://angular-8-crud.appspot.com/file-upload',fd,{
    //        onUploadProgress:ProgressEvent =>{
    //            console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
    //        }
    //    })
    //    .then(res => {
    //        console.log(res);
    //    });
    }

    render(){
        return(
            <div className="container mt-5 pt-5">
                <input 
                style={{display:'none'}}
                type="file"
                onChange={this.fileSelectedHandler}
                ref={fileInput => this.fileInput = fileInput} />
                
                <button onClick={()=>this.fileInput.click()}>Pick File</button>
                <button onClick={this.fileUploadHandler}>Upload File</button>

            </div>
        )
    }


}

export default FileUpload;