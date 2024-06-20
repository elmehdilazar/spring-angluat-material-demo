package com.example.backend.repositories;

import com.example.backend.entites.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Student findByCode(String code);
    List<Student> findByProgrameId(String programeId);
}
