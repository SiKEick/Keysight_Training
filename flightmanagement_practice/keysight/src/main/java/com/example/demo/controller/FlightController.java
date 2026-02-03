package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Flight;
import com.example.demo.service.FlightService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/flights")
public class FlightController {

    @Autowired
    private FlightService flightService;
    
    public FlightController(FlightService flightservice) {
    	this.flightService = flightservice;
    }
    @PostMapping("/add")
    public Flight addFlight(@RequestBody Flight flight) {
        return flightService.addFlight(flight);
    }

    @GetMapping("/getAll")
    public List<Flight> getAllFlights() {
        return flightService.getAllFlights();
    }
    
    @GetMapping("/{id}")
    public Flight getFlightById(@PathVariable Long id) {
        return flightService.getFlightByID(id);
    }
    
    @PutMapping("/{id}")
    public Flight updateFlight(@PathVariable Long id,@RequestBody Flight updatedFlight) {
    	return flightService.updateFlight(id, updatedFlight);
    }
    
    @DeleteMapping("/{id}")
    public String deleteFlight(@PathVariable Long id) {
    	flightService.deleteFlight(id);
    	return "Deleted";
    }
    
}