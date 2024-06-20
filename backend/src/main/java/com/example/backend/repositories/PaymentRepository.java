package com.example.backend.repositories;

import com.example.backend.entites.Payment;
import com.example.backend.entites.PaymentStatus;
import com.example.backend.entites.PaymentType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByStudentCode(String code);
    List<Payment> findByStatus(PaymentStatus status);
    List<Payment> findByType(PaymentType type);
}
