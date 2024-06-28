package com.example.backend.web;

import com.example.backend.entites.Payment;
import com.example.backend.entites.PaymentStatus;
import com.example.backend.entites.PaymentType;
import com.example.backend.entites.Student;
import com.example.backend.repositories.PaymentRepository;
import com.example.backend.repositories.StudentRepository;
import com.example.backend.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.List;

@CrossOrigin("*")
@RestController
public class PaymentRestController {
    private StudentRepository studentRepository;
    private PaymentRepository paymentRepository;
    @Autowired
    private PaymentService paymentService;

    public PaymentRestController(PaymentRepository paymentRepository, StudentRepository studentRepository) {
        this.paymentRepository = paymentRepository;
        this.studentRepository = studentRepository;
    }
    @GetMapping("/payments")
    public List<Payment> getAllPayments(){
        return paymentRepository.findAll();
    }
    @GetMapping("/students/{code}/payments")
    public List<Payment> PaymentsByStudent(@PathVariable String code){
        return paymentRepository.findByStudentCode(code);
    }
    @GetMapping("/payments/byStatus")
    public List<Payment> PaymentsByStatus(@RequestParam PaymentStatus status){
        return paymentRepository.findByStatus(status);
    }
    @GetMapping("/payments/byType")
    public List<Payment> PaymentsByType(@RequestParam PaymentType type){
        return paymentRepository.findByType(type);
    }
    @GetMapping("/payment/{id}")
    public Payment getPaymentById(@PathVariable Long id){
        return paymentRepository.findById(id).get();
    }
    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }
    @GetMapping("/students/{code}")
    public Student getStudentById(@PathVariable String code){
        return studentRepository.findByCode(code);
    }
    @GetMapping("/studentsByProgramId")
    public List<Student> getStudentsByPrograme(@RequestParam String programId){
        return studentRepository.findByProgrameId(programId);

    }
    @PutMapping("/payment/{id}")
    public Payment updatePaymenet(@RequestParam PaymentStatus status,@PathVariable Long id){
    return paymentService.updatePaymenet(status,id);
    }
    @PostMapping(path="/payments",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public  Payment savePayment(@RequestParam MultipartFile file, LocalDate date ,
                                double amount,PaymentType type,String studentCode) throws IOException
    {
        return paymentService.savePayment(file,date,amount,type,studentCode);
    }
    @GetMapping(path = "/paymentFile/{paymentID}",produces = MediaType.APPLICATION_PDF_VALUE)
    public byte[] getPaymentFile(@PathVariable Long paymentID) throws IOException {
        return paymentService.getPaymentFile(paymentID);
    }
}
