export default function CommentModal({ closeModal, deleteComment }) {
    return (
        <div className="fixed inset-0 min-h-100 min-w-100 bg-[#00000090] flex justify-center items-center">
            <section className="bg-white rounded-sm p-7 max-w-[24rem]">
                <h2 className="text-gray-950 font-medium text-xl">Delete comment</h2>
                <p className="my-3 text-gray-500">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className="text-white grid grid-cols-2 gap-4">
                    <button className="bg-gray-500 py-3 rounded-md" onClick={closeModal}>NO, CANCEL</button>
                    <button className="bg-[#ED6368] py-3 rounded-md" onClick={deleteComment}>YES, DELETE</button>
                </div>
            </section>
        </div>
    )   
}