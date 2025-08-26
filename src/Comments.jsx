import { useState } from "react";
import CommentSection from "./CommentSection";
import CommentNewForm from './CommentNewForm';
import CommentModal from "./CommentModal";

export default function Comments({ data }) {
    const [currentUser, setCurrentUser] = useState(data.currentUser);
    const [comments, setComments] = useState(data.comments);
    const [modal, setModal] = useState(false);
    const [toDelete, setToDelete] = useState('');

    function setScore(id, diff) {
        setComments(oldComments => {
            return oldComments.map(c => {
                if (c.id === id && c.user.username !== currentUser.username) {
                    return {...c, score: c.score + diff}
                }
                else {
                    const updatedReplies = c.replies.map(reply => {
                        if (reply.id === id && reply.user.username !== currentUser.username) {
                            return {...reply, score: reply.score + diff};
                        } else {
                            return reply;
                        }
                    })
                    return {...c, replies: updatedReplies};
                }
            })
        })
    }

    function addComment(comment) {
        setComments(oldComments => {
            return [...oldComments, comment];
        });
    }

    function addReply(reply, id) {
        setComments(oldComments => {
            return oldComments.map(c => {
                if (c.id === id || c.replies.some(r => r.id === id)) {
                    const updatedReplies = [...(c.replies || []), reply]
                    return {...c, replies: updatedReplies}
                } else {
                    return c;
                }
            })
        });
    }

    function openModal(id) {
        setModal(true);
        setToDelete(id);
    }

    function closeModal() {
        setModal(false);
    };

    function deleteComment() {
        setComments(oldComments =>
            // remove top-level comments
            oldComments.filter(c => c.id !== toDelete)
            // remove replies (if needed)
            .map(c => {
                const updatedReplies = c.replies.filter(
                reply => reply.id !== toDelete
                );
                return { ...c, replies: updatedReplies };
            })
        );

        setModal(false);
    }   

    function updateComment(text, id) {
        setComments(oldComments => {
            return oldComments.map(c => {
                if (c.id === id) {
                    return {...c, content: text}
                } else {
                    const updatedReplies = c.replies.map(r => {
                        if (r.id === id) {
                            return {...r, content: text}
                        } else {
                            return r;
                        }
                    });
                    return {...c, replies: updatedReplies};
                }
            })
        });
    }

    return (
        <div  className="max-w-[45rem] mx-auto">
            {comments.map(comment => {
                return < CommentSection key={comment.id} comment={comment} replies={comment.replies} setScore={setScore} currentUser={currentUser} openModal={openModal} addReply={addReply} updateComment={updateComment}/>
            })}
            < CommentNewForm currentUser={currentUser} addComment={addComment} buttonType={'send'} />
            {modal && < CommentModal closeModal={closeModal} deleteComment={deleteComment}/>}
        </div>
    )
}