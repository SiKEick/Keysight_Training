package com.example.book.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.book.model.Book;
import com.example.book.service.BookService;

@RestController
@RequestMapping("/books")
public class BookController {

	@Autowired
	private BookService bookService;
	
	public BookController(BookService bookService) {
		this.bookService = bookService;
	}
	
	@PostMapping
	public Book createBook(@RequestBody Book book) {
		return bookService.createBook(book);
	}
	
	@GetMapping("/{id}")
	public Book getBookById(@PathVariable Long id) {
		return bookService.getBookById(id);
	}
	
	@GetMapping
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}
	
	@PutMapping("/update/{id}")
	public Book updateBookById(@PathVariable Long id, @RequestBody Book book) {
		return bookService.updateBookById(id, book);
	}
	
	@DeleteMapping("/{id}")
	public void deleteBook(@PathVariable Long id) {
		bookService.deleteBook(id);
	}
	
	
	@DeleteMapping
	public void deleteAllBook() {
		bookService.deleteAllBook();
	}
	
	@GetMapping("/year/{year}")
	public List<Book> findByPublishedYear(@PathVariable int year){
		return bookService.findByPublishedYear(year);
	}
	
	
}
