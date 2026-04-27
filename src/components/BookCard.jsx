import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    const {id, title, author} = book;
    return (
        <div className="card bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{author}</p>
                <div className="justify-end card-actions">
                    <Link href={`/books/${id}`} className="btn btn-primary">Show Detail</Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;