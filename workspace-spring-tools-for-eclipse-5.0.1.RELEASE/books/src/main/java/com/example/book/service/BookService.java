package com.example.book.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.book.exception.BookNotFoundException;
import com.example.book.model.Book;
import com.example.book.repository.BookRepository;



@Service
public class BookService {

	private BookRepository bookrepos;
	
	public BookService( BookRepository bookrepos) {
		this.bookrepos = bookrepos;
	}
	
	public Book createBook(Book book) {
		return bookrepos.save(book);
	}
	
	public List<Book> getAllBooks(){
		return bookrepos.findAll();
	}
	
	public Book getBookById(Long id) {
		return bookrepos.findById(id).orElseThrow(() -> new BookNotFoundException("Book not found with id: " + id));

	}
	
	public Book updateBookById(Long id, Book book) {
		Book existing =  bookrepos.findById(id).orElseThrow(() -> new BookNotFoundException("Book not found with id: " + id));
		if(existing!=null) {
			existing.setTitle(book.getTitle());
			existing.setDescription(book.getDescription());
			existing.setYear(book.getYear());
			return bookrepos.save(existing);
			
		}
		return null;
	}
	
	public String deleteBook(Long id) {

	if (!bookrepos.existsById(id)) {
        throw new BookNotFoundException("Book not found with id: " + id);
		}

		bookrepos.deleteById(id);
		return "Deleted";
	}
	
	public String deleteAllBook() {
		bookrepos.deleteAll();
		return "Deleted all Books";
	}
	
	public List<Book> findByPublishedYear(int year) {

		List<Book> books = bookrepos.findByYear(year);
        if (books == null || books.isEmpty()) {
            throw new BookNotFoundException("No books found for year: " + year);
        }
        return books;
		
	}
	
}
