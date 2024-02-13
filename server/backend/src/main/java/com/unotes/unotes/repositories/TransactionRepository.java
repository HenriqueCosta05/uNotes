package com.unotes.unotes.repositories;

import com.unotes.unotes.enums.TransactionType;
import com.unotes.unotes.models.Note;
import com.unotes.unotes.models.Transaction;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TransactionRepository {
    Note findByRegistry (Long registry);
    boolean existsByRegistry (Long registry);
    List<Transaction> findAllTransactionsByType (TransactionType type);
    void deleteByRegistry(Long registry);

}
