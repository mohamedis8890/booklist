import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function BookForm() {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const { addBook } = useContext(BookContext);

	const handleSubmit = e => {
		e.preventDefault();

		addBook(title, author);
		setAuthor("");
		setTitle("");
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<input
				type="text"
				placeholder="book title"
				value={title}
				onChange={e => setTitle(e.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="book author"
				value={author}
				onChange={e => setAuthor(e.target.value)}
				required
			/>
			<button type="submit">Add book</button>
		</form>
	);
}

export default BookForm;
