package com.urlproject.repository;

import org.springframework.data.repository.CrudRepository;
import com.urlproject.model.Url;

public interface UrlRepository extends CrudRepository<Url,Integer> {

}
