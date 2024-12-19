import "./App.css";
import React from "react";

// Завдання 3
// Створіть і запустіть додаток React, який виведе у браузер інформацію про вашу улюблену книгу. Наприклад: назву книги, ПІБ автора, жанр книги, кількість сторінок і декілька рецензій до книги.
// Під час розробки використовуйте функціональні компоненти та синтаксис JSX.
// Завдання 4
// Реалізуйте додаток з попереднього завдання з використанням класових компонентів.

class BookDetails extends React.Component {
	render() {
		const { title, author, genre, pages, reviews } = this.props.book;

		return (
			<div>
				<h1>My favorite book</h1>
				<img src="book.jpg" alt="" />
				<h2>{title}</h2>
				<p>Author: {author}</p>
				<p>Genre: {genre}</p>
				<p>Amount of pages: {pages}</p>
				<h2>Reviews:</h2>
				<div>
					{reviews.map((review, index) => (
						<p>
							{review.reviewer}: *{review.rating}* {review.comment}
						</p>
					))}
				</div>
			</div>
		);
	}
}

class App extends React.Component {
	state = {
		book: {
			title: "Климко",
			author: "Григір Михайлович Тютюнник",
			genre: "Повість",
			pages: 158,
			reviews: [
				{
					reviewer: "Артем",
					rating: 4,
					comment: "Книга сподобалась.",
				},
				{
					reviewer: "Микола",
					rating: 2,
					comment: "Сумна книга!",
				},
				{
					reviewer: "Яна",
					rating: 3,
					comment: "Коли буде кіно?",
				},
			],
		},
	};

	render() {
		return (
			<div className="App">
				<BookDetails book={this.state.book} />
			</div>
		);
	}
}

export default App;
