import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

//this control prop is coming from the useForm hook, and it is responsible to transfer all the states to that form
export default function RTE({name, control,label,defaultValue=""}) {
  return (
    //this is goof, but as we are using React Hook Form, we will use the Controller component to wrap the Editor component
    // <Editor
    //     initialValue='default value'
    //     //what we want after initialization
    //     init={
    //         {
    //             branding: false,
    //             height: 500,//500px
    //             menubar: true,
    //             plugins: [
    //                 'advlist autolink lists link image charmap print preview anchor',
    //                 'searchreplace visualblocks code fullscreen',
    //                 'insertdatetime media table paste code help wordcount'
    //             ],
    //             toolbar:
    //                 'undo redo | formatselect | bold italic backcolor | \
    //                 alignleft aligncenter alignright alignjustify | \
    //                 bullist numlist outdent indent | removeformat | help'
    //         }
    //     }
    // />

    <div className='w-full '>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
        <Controller
            name={name || "content"}
            control={control}
            //this is how to render the Editor component
            render={({field: {onChange}})=>(
                <Editor
                    apiKey='bwpazuuhklvouuipyi8ecq9g4kilj2xppaa8nyonzxlmn24x'
                    initialValue={defaultValue}
                    //what we want after initialization
                    init={
                        {
                            //we are getting all this from the tinymce documentation
                            branding: false,
                            height: 500,//500px
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            content_css: '//www.tiny.cloud/css/codepen.min.css',
                            directionality: 'ltr',
                        }
                    }
                    onEditorChange={onChange}
                />
            )}
        />
    </div>

  )
}
