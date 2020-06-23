import React from  'react';

export const BookListItem = ({book}) => {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
                <a href="#" >edit</a>
                <a href="#" >delete</a>
            </td>
        </tr>
    )
}