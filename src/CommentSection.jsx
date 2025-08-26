import CommentItem from "./CommentItem";

export default function CommentSection({ comment, replies, setScore, currentUser, openModal, addReply, updateComment }) {
    return (
        <section>
            < CommentItem comment={comment} setScore={setScore} currentUser={currentUser} openModal={openModal} addReply={addReply} updateComment={updateComment}/>
            <div className="border-l-2 border-gray-200 pl-5 lg:pl-10 lg:ml-10">
                {replies.map(reply => {
                    return < CommentItem key={reply.id} comment={reply} setScore={setScore} currentUser={currentUser} openModal={openModal} addReply={addReply} updateComment={updateComment}/>
                })}
            </div>
        </section>
    )
}