package com.unotes.unotes.repositories;

import com.unotes.unotes.enums.TransactionType;
import com.unotes.unotes.models.Note;
import com.unotes.unotes.models.Transaction;

import java.util.List;

public interface TransactionRepository {
    Note findByRegistry (Long registry);
    boolean existsByRegistry (Long registry);
    List<Transaction> findAllTransactionsByType (TransactionType type);
    void deleteByRegistry(Long registry);

}
