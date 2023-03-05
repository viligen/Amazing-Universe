export default function CreatePostForm() {
    return (
        <form>
            <label for='title'>Title:</label>
            <input type='text' id='title' name='title' />
            <label for='description'>Description:</label>
            <textarea type='text' id='description' name='description' />
            <label for='source'>Source:</label>
            <input type='text' id='source' name='source' />
            <label for='date'>Date:</label>
            <input type='text' id='date' name='date' />
            <label for='imageUrl'>Image URL:</label>
            <input type='text' id='imageUrl' name='imageUrl' />
            <button type='submit' className='postBtn'>
                Submit
            </button>
        </form>
    );
}
