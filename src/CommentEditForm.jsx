import { useState } from "react";

export default function CommentEditForm({ comment, updateComment, toggleEdit }) {
    const [text, setText] = useState(comment.content);

    function handleSubmit(e){
        e.preventDefault();
        if (text) {
            updateComment(text, comment.id);
            toggleEdit();
        }
    }

    return (
        <form action="#" className="mt-4 flex flex-col items-end" onSubmit={handleSubmit}>
            <textarea name="editComment" id="editComment" value={text} onChange={(e) => setText(e.target.value)} className="w-full h-25 border-2 border-gray-100 rounded-sm py-3 px-6 mb-2 lg:mb-0 focus:outline-gray-500 resize-none leading-tight" placeholder="Add a comment..." />
            <button type='submit' className="bg-blueish text-white font-medium py-3 mt-4 w-30 rounded-lg h-min disabled:opacity-50 uppercase" disabled={text ? false : true}>Update</button>
        </form>
    )
}