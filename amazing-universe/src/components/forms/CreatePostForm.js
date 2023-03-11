export default function CreatePostForm() {
    return (
        <form>
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' name='title' defaultValue='' />
            <label htmlFor='description'>Description:</label>
            <textarea
                type='text'
                id='description'
                name='description'
                defaultValue=''
            />
            <label htmlFor='source'>Source:</label>
            <input type='text' id='source' name='source' defaultValue='' />
            <label htmlFor='date'>Date:</label>
            <input type='text' id='date' name='date' defaultValue='' />
            <label htmlFor='imageUrl'>Image URL:</label>
            <input type='text' id='imageUrl' name='imageUrl' defaultValue='' />
            <button type='submit' className='postBtn'>
                Submit
            </button>
        </form>
    );
}
