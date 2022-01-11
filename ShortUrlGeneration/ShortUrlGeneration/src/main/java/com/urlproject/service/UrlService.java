package com.urlproject.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.urlproject.model.Url;
import com.urlproject.repository.UrlRepository;

@Service
public class UrlService {

	@Autowired
	UrlRepository urlrepository;
	public  List<Url> getAllUrls() {
		List<Url> urls = new ArrayList<Url>();
		urlrepository.findAll().forEach(urls1 -> urls.add(urls1));
		return urls;
	}

	public void saveOrUpdate(Url url) {
		urlrepository.save(url);
	}

	public Url findById(int urlid) {
		// TODO Auto-generated method stub
		Optional<Url> foundUrl = urlrepository.findById(urlid);
		return foundUrl.get();
	}

}
