package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "flights")
public class Flight {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "Flight_Name")
	private String flightName;
	
	@Column(name = "Source")
	private String source;
	
	@Column(name = "Destination")
	private String destination;
	
	public Flight() {}
	
	public Flight(String flightName, String source,String destination) {
		
		this.flightName = flightName;
		this.source = source;
		this.destination = destination;
	}

	public Long getId() {
		return id;
	}

	

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}
	
	
}
