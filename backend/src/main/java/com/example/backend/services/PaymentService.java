package com.example.backend.services;

import com.example.backend.entites.Payment;
import com.example.backend.entites.PaymentStatus;
import com.example.backend.entites.PaymentType;
import com.example.backend.entites.Student;
import com.example.backend.repositories.PaymentRepository;
import com.example.backend.repositories.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.UUID;

@Service
@Transactional
public class PaymentService {

    StudentRepository studentRepository;

    PaymentRepository paymentRepository;

    public PaymentService(StudentRepository studentRepository, PaymentRepository paymentRepository) {
        this.studentRepository = studentRepository;
        this.paymentRepository = paymentRepository;
    }

    public Payment savePayment(MultipartFile file, LocalDate date ,
                               double amount, PaymentType type, String studentCode) throws IOException
    {

        Resource resource = new ClassPathResource("static/payments");
        Path folderPath;

        try {
            folderPath = Paths.get(resource.getFile().toURI());
        } catch (FileNotFoundException e) {
            // Handle case where directory does not exist yet
            folderPath = Paths.get("src/main/resources/static/payments");
        }

        // Create the directory if it does not exist
        if (!Files.exists(folderPath)) {
            Files.createDirectories(folderPath);
        }

        // Generate a unique file name
        String fileName = UUID.randomUUID().toString();
        Path filePath = folderPath.resolve(fileName + ".pdf");

        // Get the student by code
        Student student = studentRepository.findByCode(studentCode);

        // Copy the file to the target location
        Files.copy(file.getInputStream(), filePath);

        // Create a new Payment object
        Payment payment = Payment.builder()
                .type(type)
                .date(date)
                .amount(amount)
                .file(filePath.toUri().toString())
                .status(PaymentStatus.CREATED)
                .student(student)
                .build();

        // Save the payment to the repository
        return paymentRepository.save(payment);
    }
    public byte[] getPaymentFile(Long paymentID) throws IOException {
        Payment payment = paymentRepository.findById(paymentID).get();
        return Files.readAllBytes(Path.of(URI.create(payment.getFile())));
    }
    public Payment updatePaymenet( PaymentStatus status,  Long id){
        Payment payment = paymentRepository.findById(id).get();
        payment.setStatus(status);
        return paymentRepository.save(payment);
    }
}
