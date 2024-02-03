package com.unotes.unotes.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.unotes.unotes.enums.TransactionType;
import jakarta.persistence.*;
@Entity
@Table(name = "transaction")
public class Transaction {
    @Id
    @JsonProperty(value = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @JsonProperty(value = "Registry")
    @Column(name="registry")
    private Long registry;

    @JsonProperty(value = "Type")
    @Enumerated(EnumType.STRING)
    @Column(name="type")
    private TransactionType type;

}
