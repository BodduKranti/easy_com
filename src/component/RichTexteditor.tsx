import { FC } from 'react'
import ReactQuill from 'react-quill';

interface RichTexteditorprops {
    value: any,
    onChange: (data: any) => void
}
const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown


    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];
const RichTexteditor: FC<RichTexteditorprops> = ({
    value,
    onChange
}) => {
    return (
        <>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={{ toolbar: toolbarOptions }}
            />
        </>
    )
}

export default RichTexteditor
