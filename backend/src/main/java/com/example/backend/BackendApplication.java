package com.example.backend;

import com.example.backend.entites.Payment;
import com.example.backend.entites.PaymentStatus;
import com.example.backend.entites.PaymentType;
import com.example.backend.entites.Student;
import com.example.backend.repositories.PaymentRepository;
import com.example.backend.repositories.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.Random;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	/*@Bean
	CommandLineRunner commandLineRunner(StudentRepository studentRepository,
										PaymentRepository payementRepository
										) {
		return args -> {
			studentRepository.save(Student.builder()
							.firstname("mehdi")
							.lastname("lazar")
							.code("12344")
							.photo("avata.png")
							.programeId("SSUI")
					.build());
			studentRepository.save(Student.builder()
							.firstname("simo")
							.lastname("lazar")
							.code("12355")
							.photo("avata.png")
							.programeId("SSUI")
					.build());
			studentRepository.save(Student.builder()
							.firstname("amani")
							.lastname("lazar")
							.code("12366")
							.photo("avata.png")
							.programeId("SSUI")
					.build());
			studentRepository.save(Student.builder()
							.firstname("ayman")
							.lastname("abidal")
							.code("12377")
							.photo("avata.png")
							.programeId("SSUI")
					.build());
			PaymentType[] paymentTypes = PaymentType.values();
			Random random = new Random();
			studentRepository.findAll().forEach(st->{
				for (int i = 0; i < 5; i++) {
					int index = random.nextInt(paymentTypes.length);
					Payment payment=Payment.builder()
							.amount(1000+(int)(Math.random()*20000))
							.type(paymentTypes[index])
							.date(LocalDate.now())
							.status(PaymentStatus.CREATED)
							.student(st)
							.build();
					payementRepository.save(payment);
				}
			});

		};

	}
*/
}
