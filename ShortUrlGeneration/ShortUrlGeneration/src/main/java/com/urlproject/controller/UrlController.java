package com.urlproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.urlproject.model.Url;
import com.urlproject.service.UrlService;
import com.urlproject.exception.ResourceNotFoundException;
@RestController
@CrossOrigin(origins = "http://localhost:4201")
public class UrlController {
	
	@Autowired
	UrlService urlService;
	
	@GetMapping("/urls")
	private List<Url> getAllUrls()
	{
		return urlService.getAllUrls();
	}
	
	@PostMapping("/url")
	private int saveUrl(@RequestBody Url url)
	{
		urlService.saveOrUpdate(url);
		return url.getUrlid();
	}
	
	@PutMapping("/UpdateUrl")
	private Url updateUrl(@RequestBody Url url) {
		Url url1 = urlService.findById(url.getUrlid());
		if(url1 == null) {
			throw new ResourceNotFoundException("Url not found for it to be updated");
		}
		urlService.saveOrUpdate(url);
		return url;
		
	}
	
	

}
