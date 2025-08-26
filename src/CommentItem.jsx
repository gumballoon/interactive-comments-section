import { useState } from 'react';
import CommentScore from './CommentScore';
import CommentReplyButton from './CommentReplyButton';
import CommentEditButton from './CommentEditButton';
import CommentNewForm from './CommentNewForm';
import CommentEditForm from './CommentEditForm';

export default function CommentItem({ comment, setScore, currentUser, openModal, addComment, addReply, updateComment }) {
    const isAuthor = comment.user.username === currentUser.username;
    const [isReplyVisible, setIsReplyVisible] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false);

    function toggleReply() {
        setIsReplyVisible(!isReplyVisible);
    }

    function toggleEdit() {
        setIsEditVisible(!isEditVisible);
    }

    return (
        <>
            <div className="bg-white my-4 mx-auto p-6 pb-3 rounded-lg lg:flex lg:gap-5 lg:items-start">
                <div className='w-full'>
                    <div className='lg:flex lg:justify-between'>
                        <div className='flex items-center max-h-9'>
                            <img src={comment.user.image.png} alt="" className='max-h-9'/>
                            <div className="flex items-center font-medium mx-4">
                                <span>{comment.user.username}</span>
                                {isAuthor && <span className='text-white bg-blueish text-xs py-0.5 px-2 ml-2'>you</span>}
                            </div>
                            <span className="text-gray-500">{comment.createdAt}</span>
                        </div>
                        <div className="hidden lg:block">
                            {isAuthor ? < CommentEditButton id={comment.id} toggleEdit={toggleEdit} openModal={openModal}/> : < CommentReplyButton toggleReply={toggleReply}/>}
                        </div>
                    </div>
                    {isEditVisible ? < CommentEditForm comment={comment} updateComment={updateComment} toggleEdit={toggleEdit}/> : <p className='text-gray-500 my-4'>
                        {comment.replyingTo && <span className="font-medium text-blueish">{'@' + comment.replyingTo + ' '}</span>}
                        {comment.content}
                    </p>}
                </div>

                <div className='flex justify-between items-center lg:order-first'>
                    < CommentScore comment={comment} setScore={setScore} />
                    
                    <div className="lg:hidden">
                        {isAuthor ? < CommentEditButton id={comment.id} openModal={openModal}/> : < CommentReplyButton toggleReply={toggleReply}/>}
                    </div>
                </div>
            </div>

            {isReplyVisible && < CommentNewForm comment={comment} currentUser={currentUser} addComment={addComment} buttonType={'reply'} addReply={addReply} toggleReply={toggleReply}/>}
        </>
        
    )

}