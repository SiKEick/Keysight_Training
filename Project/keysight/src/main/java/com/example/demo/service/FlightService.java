package com.example.demo.service;



import java.util.List;

import org.springframework.stereotype.Service;


import com.example.demo.model.Flight;
import com.example.demo.repositories.FlightRepository;

@Service
public class FlightService {
	
	private FlightRepository flightrepos;
	
	public FlightService(FlightRepository flightrepos) {
		this.flightrepos = flightrepos;
	}
	
	public Flight addFlight(Flight flight) {
		return flightrepos.save(flight);
	}
	
	public List<Flight> getAllFlights() {
        return flightrepos.findAll();
    }
	
	 public Flight updateFlight(Long id,Flight flight) {
	    	Flight existing = flightrepos.findById(id).orElse(null);
	    	if(existing!=null) {
	    		existing.setFlightName(flight.getFlightName());
	    		existing.setSource(flight.getSource());
	    		existing.setDestination(flight.getDestination());
	    		return flightrepos.save(existing);
	    		
	    	}
	    	return null;
	    }
	 
	 public Flight getFlightByID(Long id) {
		 return flightrepos.findById(id).orElse(null);
	 }
	
	 
	 public void deleteFlight(Long id) {
		flightrepos.deleteById(id);
	 }
}
