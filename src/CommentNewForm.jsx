import { useState } from "react";

export default function CommentForm({ comment, currentUser, buttonType, addComment, addReply, toggleReply }) {
    const [text, setText] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        if (text) {
            if (buttonType === 'send') {
                addComment({
                    id: crypto.randomUUID(),
                    content: text,
                    createdAt: "Just now",
                    score: 0,
                    user: currentUser,
                    replies: []
                });
            } else if (buttonType === 'reply') {
                addReply({
                    id: crypto.randomUUID(),
                    content: text,
                    createdAt: "Just now",
                    score: 0,
                    user: currentUser,
                    replyingTo: comment.user.username
                }, comment.id);
            }
            setText('');
            toggleReply();
        }
    }

    return (
        <form action="#" className="bg-white my-4 mx-auto p-6 pb-3 rounded-lg lg:flex lg:gap-5 lg:items-start" onSubmit={handleSubmit}>
            <img src={currentUser.image.png} alt="" className="max-h-9 hidden lg:block"/>
            <textarea name="newComment" id="newComment" value={text} onChange={(e) => setText(e.target.value)} className="w-full h-25 border-2 border-gray-100 rounded-sm py-3 px-6 mb-2 lg:mb-0 focus:outline-gray-500 resize-none leading-tight" placeholder="Add a comment..."/>
            <div className="flex justify-between items-center">
                <img src={currentUser.image.png} alt="" className="max-h-9 lg:hidden"/>
                <button type='submit' className="bg-blueish text-white font-medium py-3 w-30 rounded-lg h-min disabled:opacity-50 uppercase" disabled={text ? false : true}>{buttonType}</button>
            </div>
        </form>
    )
}